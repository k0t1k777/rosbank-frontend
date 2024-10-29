import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CompetencyType, Skills } from 'src/services/types';
import { getSkills, getСompetencies } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  isLoading: boolean;
  error: string | null | unknown;
  skills: Skills[];
  highlightedSkill: string | null;
  speciality: string;
  isOpenCalendar: boolean;
  soft: boolean;
  hard: boolean;
  competencies: CompetencyType[];
  competencyName: string | null;
  skillName: number | null;
  labels: string[];
  plannedResults: number[];
  actualResults: number[];
}

const initialState: StateType = {
  isLoading: false,
  error: null,
  skills: [],
  highlightedSkill: '',
  speciality: 'Оценка навыков',
  isOpenCalendar: false,
  soft: false,
  hard: true,
  competencies: [],
  competencyName: null,
  skillName: null,
  labels: [],
  plannedResults: [],
  actualResults: [],
};

export const fetchGetSkills = createAsyncThunk(
  'fetch/skills',
  async ({
    skillDomains,
  }: {
    skillDomains: string;
  }) => {
    const response = await getSkills(skillDomains);
    return response;
  }
);

export const fetchGetCompetencies = createAsyncThunk(
  'fetch/skills/competencies',
  async ({
    skillDomains,
  }: {
    skillDomains: string;
  }) => {
    const response = await getСompetencies(skillDomains);
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
    setIsOpenCalendar(state, action) {
      state.isOpenCalendar = action.payload;
    },
    toggleCheckbox(state, action) {
      const { skillType } = action.payload;
      state.hard = skillType === 'hard';
      state.soft = skillType === 'soft';
    },
    setCompetencyName(state, action) {
      state.competencyName = action.payload;
    },
    setSkillName(state, action) {
      state.skillName = action.payload;
    },
    setLabels(state, action) {
      state.labels = action.payload;
    },
    setPlannedResults(state, action) {
      state.plannedResults = action.payload;
    },
    setActualResults(state, action) {
      state.actualResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetSkills.fulfilled, (state, action) => {
        state.skills = action.payload;
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
        state.competencies = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetCompetencies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export const {
  setHighlightedSkill,
  setSpeciality,
  setIsOpenCalendar,
  toggleCheckbox,
  setCompetencyName,
  setSkillName,
  setLabels,
  setPlannedResults,
  setActualResults,
} = skillsSlice.actions;
export const skillsReducer = skillsSlice.reducer;
export const selectSkills = (state: RootStore) => state.skills;
