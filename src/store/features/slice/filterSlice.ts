import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SelectsProps } from 'src/services/types';
import { getSelects } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  selects: SelectsProps;
  isLoading: boolean;
  error: string | null | unknown;
  position: string,
  department: string,
  city: string,
}

const initialState: StateType = {
  selects: {
    positions: [],
    departments: [],
    cities: []
  },
  position: '',
  department: '',
  city: '',
  isLoading: false,
  error: null,
};

export const fetchSelects = createAsyncThunk(
  'fetch/selects',
  async () => {
    const response = await getSelects();
    return response;
  }
);

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPosition(state, action) {
      state.position = action.payload;
    },
    setDepartment(state, action) {
      state.department = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSelects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSelects.fulfilled, (state, action) => {
        state.selects.positions = action.payload.positions;
        state.selects.departments = action.payload.departments;
        state.selects.cities = action.payload.cities;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSelects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {setPosition, setDepartment, setCity} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectFilter = (state: RootStore) => state.filter;
