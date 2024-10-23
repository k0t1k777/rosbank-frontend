import { configureStore } from '@reduxjs/toolkit';
import { employeesReducer } from './features/slice/membersSlice';
import { skillsReducer } from './features/slice/skillSlice';
import { chartsReducer } from './features/slice/chartsSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    skills: skillsReducer,
    charts: chartsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
