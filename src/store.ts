import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/AuthSlice";
import { StockSlice } from "./slices/StockSlice";
import { userSlice } from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    authStore: AuthSlice.reducer,
    stockStore: StockSlice.reducer,
    userStore: userSlice.reducer,
  },
});

export type CustomDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
