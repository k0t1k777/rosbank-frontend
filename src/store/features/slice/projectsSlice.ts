import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProjectseProps } from 'src/services/types';
import { getProjects } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  projects: ProjectseProps[];
  isLoading: boolean;
  error: string | null | unknown;
 }

const initialState: StateType = {
  projects: [],
  isLoading: false,
  error: null,
 };

export const fetchGetProjects = createAsyncThunk(
  'fetch/projects',
  async () => {
    const response = await getProjects();
    return response;
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export const projectsReducer = projectsSlice.reducer;
export const selectProjects = (state: RootStore) => state.projects;
