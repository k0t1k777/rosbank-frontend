import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { membersProps } from 'src/services/types';
import { getMembersData } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  members: membersProps[];
  isLoading: boolean;
  error: string | null | unknown;
  isFilterOpen: boolean;
  currentPage: number;
  membersAmount: number;
  shortWindow: boolean;
  membersValue: string;
  cards: membersProps[];
  search: string;
  position: string;
  department: string;
  city: string;
}

const initialState: StateType = {
  members: [],
  isLoading: false,
  error: null,
  isFilterOpen: false,
  currentPage: 1,
  membersAmount: 0,
  shortWindow: false,
  membersValue: '',
  cards: [],
  search: '',
  position: '',
  department: '',
  city: '',
};

export const fetchGetMembers = createAsyncThunk(
  'fetch/members',
  async ({
    page,
    search,
    position,
    department,
    city,
  }: {
    page: number;
    search: string;
    position: string;
    department: string;
    city: string;
  }) => {
    const response = await getMembersData(page, search, position, department, city);
    return response;
  }
);

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    setIsFilterOpen(state, action) {
      state.isFilterOpen = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setShortWindow(state, action) {
      state.shortWindow = action.payload;
    },
    setCards(state, action) {
      state.cards = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetMembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetMembers.fulfilled, (state, action) => {
        state.members = action.payload.results;
        state.membersAmount = action.payload.count;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetMembers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setIsFilterOpen,
  setCurrentPage,
  setShortWindow,
  setCards,
  setSearch,
} = membersSlice.actions;
export const membersReducer = membersSlice.reducer;
export const selectMembers = (state: RootStore) => state.members;
