import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  membersProps,
  ProfileProps,
  RegisterDataProps,
} from 'src/services/types';
import { getMemberId, getProfile, registration } from 'src/store/api';
import { RootStore } from 'src/store/store';

export interface StateType {
  access: string;
  isLoading: boolean;
  error: string | null | unknown;
  loggedIn: boolean;
  profile: ProfileProps | null;
  loading: boolean;
  isProfileOpen: boolean;
  selectedMember: membersProps | null;
  showMore: boolean;
  email: string;
  password: string;
}

const initialState: StateType = {
  access: '',
  isLoading: false,
  error: null,
  loggedIn: false,
  profile: null,
  loading: false,
  isProfileOpen: false,
  selectedMember: null,
  showMore: true,
  email: 'admin@admin.com',
  password: 'admin',
};

export const fetchRegisterUser = createAsyncThunk(
  'fetch/user',
  async ({ email, password }: RegisterDataProps) => {
    const response = await registration({ email, password });
    return response;
  }
);

export const fetchGetProfile = createAsyncThunk('fetch/profile', async () => {
  const response = await getProfile();
  return response;
});

export const fetchGetMemberId = createAsyncThunk(
  'fetch/members/count',
  async (id: number) => {
    const response = await getMemberId(id);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.access = action.payload;
      state.loggedIn = true;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIsProfileOpen(state, action) {
      state.isProfileOpen = action.payload;
    },
    setShorMore(state, action) {
      state.showMore = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegisterUser.fulfilled, (state, action) => {
        state.access = action.payload.token;
        state.error = null;
        state.loggedIn = true;
      })
      .addCase(fetchRegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGetProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGetProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchGetMemberId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGetMemberId.fulfilled, (state, action) => {
        if (action.payload) {
          state.selectedMember = action.payload;
        } else {
          state.selectedMember = null;
        }
        state.isProfileOpen = false;
      })
      .addCase(fetchGetMemberId.rejected, (state, action) => {
        state.isProfileOpen = false;
        state.error = action.error.message;
        state.selectedMember = null;
      });
  },
});

export const {
  setLoggedIn,
  setLoading,
  setIsProfileOpen,
  setShorMore,
  setEmail,
  setPassword,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectUsers = (state: RootStore) => state.user;
