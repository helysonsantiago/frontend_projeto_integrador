import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { stockStates } from "../types/stock/stockType";
import { responseApiStock } from "../types/response-api/responseApiTypes";
import StockService from "../services/StockService";

const initialState: stockStates = {
  stock: [],
  error_stock: false,
  success_stock: false,
  loading_stock: false,
};

export const getStock = createAsyncThunk(
  "stock/getStock",
  async (_, thunkAPI) => {
    const data: responseApiStock = await StockService.getStock();
    if (data.code === 400) {
      localStorage.setItem("current-user","null");
      return thunkAPI.rejectWithValue(data.message);
    } else if (data.code === 200) {
      return thunkAPI.fulfillWithValue(data.stock);
    }
  }
);

export const StockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    resetStock: (state) => {
      state.stock = [];
      state.error_stock = false;
      state.loading_stock = false;
      state.success_stock = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStock.pending, (state) => {
        state.error_stock = false;
        state.loading_stock = true;
        state.success_stock = false;
        state.stock = [];
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.error_stock = false;
        state.success_stock = true;
        state.loading_stock = false;
        state.stock = action.payload as [];
      })
      .addCase(getStock.rejected, (state, action) => {
        state.error_stock = action.payload as string;
        state.success_stock = false;
        state.loading_stock = false;
        state.stock = [];
      });
  },
});
export const { resetStock } = StockSlice.actions;
export default StockSlice.reducer;
