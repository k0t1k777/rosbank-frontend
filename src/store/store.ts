import { configureStore } from '@reduxjs/toolkit';
import { employeesReducer } from './features/slice/membersSlice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
