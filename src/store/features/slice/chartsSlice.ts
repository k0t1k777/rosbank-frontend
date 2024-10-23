import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Development, Employers_plan, Involvement } from 'src/services/types';
import { getDevelopment, getEmployers, getInvolvement } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  isLoading: boolean;
  error: string | null | unknown;
  involvement: Involvement[];
  development: Development[];
  employers_plan: Employers_plan;
}

const initialState: StateType = {
  isLoading: false,
  error: null,
  involvement: [],
  development: [],
  employers_plan: {
    period: [],
    numberOfEmployee: '',
    numberOfBusFactor: '',
    numberOfKeyPeople: '',
  },
};

export const fetchGetInvolvement = createAsyncThunk(
  'fetch/involvement',
  async ({
    startMonth,
    startYear,
    endMonth,
    endYear,
  }: {
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
  }) => {
    const response = await getInvolvement(
      startMonth,
      startYear,
      endMonth,
      endYear
    );
    return response;
  }
);

export const fetchGetDevelopment = createAsyncThunk(
  'fetch/development',
  async ({
    startMonth,
    startYear,
    endMonth,
    endYear,
  }: {
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
  }) => {
    const response = await getDevelopment(
      startMonth,
      startYear,
      endMonth,
      endYear
    );
    return response;
  }
);

export const fetchGetEmployers = createAsyncThunk(
  'fetch/employers_plan',
  async ({
    startMonth,
    startYear,
    endMonth,
    endYear,
  }: {
    startMonth: string;
    startYear: string;
    endMonth: string;
    endYear: string;
  }) => {
    const response = await getEmployers(
      startMonth,
      startYear,
      endMonth,
      endYear
    );
    return response;
  }
);

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    // setHighlightedSkill(state, action) {
    //   state.highlightedSkill = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetInvolvement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetInvolvement.fulfilled, (state, action) => {
        state.involvement = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetInvolvement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGetDevelopment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetDevelopment.fulfilled, (state, action) => {
        state.development = action.payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetDevelopment.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGetEmployers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetEmployers.fulfilled, (state, action) => {
        state.employers_plan = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetEmployers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

// export const {
// } = skillsSlice.actions;
export const chartsReducer = chartsSlice.reducer;
export const selectCharts = (state: RootStore) => state.charts;
