import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'src/store/features/slice/userSlice';
import { membersReducer } from './features/slice/membersSlice';
import { teamsReducer } from './features/slice/teamsSlice';
import { projectsReducer } from './features/slice/projectsSlice';
import { filterReducer } from './features/slice/filterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    members: membersReducer,
    teams: teamsReducer,
    projects: projectsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
