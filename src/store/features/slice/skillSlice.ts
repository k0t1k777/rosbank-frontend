import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Skills } from 'src/services/types';
import { getSkills } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  isLoading: boolean;
  error: string | null | unknown;
  skills: Skills[];
  highlightedSkill: string | null;
  speciality: string;
  isOpen: boolean;
  soft: boolean;
  hard: boolean;
}

const initialState: StateType = {
  isLoading: false,
  error: null,
  skills: [],
  highlightedSkill: '',
  speciality: 'Сотрудники',
  isOpen: false,
  soft: false,
  hard: true,
};

export const fetchGetSkills = createAsyncThunk(
  'fetch/skills',
  async (skillDomains: string) => {
    const response = await getSkills(skillDomains);
    return response;
  }
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setHighlightedSkill(state, action) {
      state.highlightedSkill = action.payload;
    },
    setSpeciality(state, action) {
      state.speciality = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setHard(state, action) {
      state.hard = action.payload;
    },
    setSoft(state, action) {
      state.soft = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetSkills.fulfilled, (state, action) => {
        state.skills = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setHighlightedSkill,
  setSpeciality,
  setIsOpen,
  setHard,
  setSoft,
} = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
export const selectSkills = (state: RootStore) => state.skills;
