import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AmountType, EmployeeType } from 'src/services/types';
import { getAmountEmployees, getEmployees } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  isLoading: boolean;
  error: string | null | unknown;
  employees: EmployeeType[];
  amount: AmountType;
  date: string;
  tooltipIndex: number | null;
  position: string;
  grade: string;
  worker: string;
  tooltip: number | null;
}

const initialState: StateType = {
  isLoading: false,
  error: null,
  employees: [],
  amount: {
    numberOfEmployee: '0',
    numberOfBusFactor: '0',
    numberOfKeyPeople: '0',
  },
  date: '',
  tooltipIndex: null,
  position: '',
  grade: '',
  worker: '',
  tooltip: null
};

export const fetchGetEmployees = createAsyncThunk(
  'fetch/employees',
  async ({
    position,
    grade,
    worker,
  }: {
    position: string;
    grade: string;
    worker: string;
  }) => {
    const response = await getEmployees(position, grade, worker);
    return response;
  }
);

export const fetchAmountEmployees = createAsyncThunk(
  'fetch/amount',
  async () => {
    const response = await getAmountEmployees();
    return response;
  }
);

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setTooltipIndex(state, action) {
      state.tooltipIndex = action.payload;
    },
    setPosition(state, action) {
      state.position = action.payload;
    },
    setGrade(state, action) {
      state.grade = action.payload;
    },
    setWorker(state, action) {
      state.worker = action.payload;
    },
    setTooltip(state, action) {
      state.tooltip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetEmployees.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAmountEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAmountEmployees.fulfilled, (state, action) => {
        state.amount = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAmountEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setDate,
  setTooltipIndex,
  setPosition,
  setGrade,
  setWorker,
  setTooltip,
} = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;
export const selectEmployees = (state: RootStore) => state.employees;
