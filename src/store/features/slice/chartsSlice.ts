import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Development, Employers_plan, FetchParams, Involvement } from 'src/services/types';
import { getDevelopment, getEmployers, getInvolvement } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  isLoading: boolean;
  error: string | null | unknown;
  involvement: Involvement[];
  development: Development[];
  employers_plan: Employers_plan;
  selectedYear: string | null;
  selectedMonths: string[];
  startMonth: string | null;
  endMonth: string | null;
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
  selectedYear: null,
  selectedMonths: [],
  startMonth: null,
  endMonth: null,
};

export const fetchGetInvolvement = createAsyncThunk(
  'fetch/involvement',
  async ({ startMonth, startYear, endMonth, endYear }: FetchParams) => {
    return await getInvolvement(startMonth, startYear, endMonth, endYear);
  }
);

export const fetchGetDevelopment = createAsyncThunk(
  'fetch/development',
  async ({ startMonth, startYear, endMonth, endYear }: FetchParams) => {
    return await getDevelopment(startMonth, startYear, endMonth, endYear);
  }
);

export const fetchGetEmployers = createAsyncThunk(
  'fetch/employers_plan',
  async ({ startMonth, startYear, endMonth, endYear }: FetchParams) => {
    return await getEmployers(startMonth, startYear, endMonth, endYear);
  }
);

const chartsSlice = createSlice({
  name: 'charts',
  initialState,
  reducers: {
    setSelectedYear(state, action) {
      state.selectedYear = action.payload;
    },
    setSelectedMonths(state, action) {
      state.selectedMonths = action.payload;
    },
    setStartMonth(state, action) {
      state.startMonth = action.payload;
    },
    setEndMonth(state, action) {
      state.endMonth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetInvolvement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetInvolvement.fulfilled, (state, action) => {
        state.involvement = action.payload;
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
        state.development = action.payload;
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
      });
  },
});

export const {
  setSelectedYear,
  setSelectedMonths,
  setStartMonth,
  setEndMonth,
} = chartsSlice.actions;
export const chartsReducer = chartsSlice.reducer;
export const selectCharts = (state: RootStore) => state.charts;
