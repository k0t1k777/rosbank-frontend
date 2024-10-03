import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { inintialTeam } from 'src/services/const';
import { TeamsProps } from 'src/services/types';
import { getTeams, getTeamsId } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  teams: TeamsProps[];
  team: TeamsProps | undefined;
  isLoading: boolean;
  error: string | null | unknown;
  nameTeam: string;
  addTeam: TeamsProps[];
  selectedTeam: null,
  teamsLoaded: boolean,
 }

const initialState: StateType = {
  teams: [],
  team: inintialTeam,
  isLoading: false,
  error: null,
  nameTeam: '',
  addTeam: [],
  selectedTeam: null,
  teamsLoaded: false,
 };

export const fetchGetTeams = createAsyncThunk(
  'fetch/teams',
  async () => {
    const response = await getTeams();
    return response;
  }
);

export const fetchGetTeamsId = createAsyncThunk(
  'fetch/teams/id',
  async (id: number) => {
    const response = await getTeamsId(id);
    return response;
  }
);

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    setNameTeam(state, action) {
      state.nameTeam = action.payload;
    },
    setAddTeam(state, action) {
      state.addTeam = action.payload;
    },
    setSelectedTeam(state, action) {
      state.selectedTeam = action.payload;
    },
    selectTeamsLoaded(state, action) {
      state.teamsLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTeams.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetTeams.fulfilled, (state, action) => {
        state.teams = action.payload;
        state.isLoading = false;
        state.error = null;
        state.teamsLoaded = true;
      })
      .addCase(fetchGetTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGetTeamsId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetTeamsId.fulfilled, (state, action) => {
        state.team = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetTeamsId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export const { setNameTeam, setAddTeam, setSelectedTeam, selectTeamsLoaded } = teamsSlice.actions;
export const teamsReducer = teamsSlice.reducer;
export const selectTeams = (state: RootStore) => state.teams;
