import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { inintialCompetencies } from 'src/services/const';
import { CompetencyType, Skills } from 'src/services/types';
import { getSkills, getСompetencies } from 'src/store/api';
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
  competencies: CompetencyType;
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
  competencies: inintialCompetencies,
};

export const fetchGetSkills = createAsyncThunk(
  'fetch/skills',
  async ({
    skillDomains,
    skillId,
  }: {
    skillDomains: string;
    skillId?: string;
  }) => {
    const response = await getSkills(skillDomains, skillId);
    return response;
  }
);

export const fetchGetCompetencies = createAsyncThunk(
  'fetch/skills/competencies',
  async ({
    skillDomains,
    id,
  }: {
    skillDomains: string;
    id: string;
  }) => {
    const response = await getСompetencies(skillDomains, id);
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
      })
      .addCase(fetchGetCompetencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetCompetencies.fulfilled, (state, action) => {
        state.competencies = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetCompetencies.rejected, (state, action) => {
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
