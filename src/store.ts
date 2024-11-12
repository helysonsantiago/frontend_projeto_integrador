import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './slices/AuthSlice';



export const store = configureStore({
  reducer: {
    authStore: AuthSlice.reducer,
  },
});

export type CustomDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;