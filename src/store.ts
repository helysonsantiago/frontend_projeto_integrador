import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from './slices/AuthSlice';
import {StockSlice} from './slices/StockSlice';



export const store = configureStore({
  reducer: {
    authStore: AuthSlice.reducer,
    stockStore : StockSlice.reducer
  },
});

export type CustomDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;