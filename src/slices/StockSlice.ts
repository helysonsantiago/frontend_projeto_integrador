import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { stockModel, stockStates } from "../types/stock/stockType";
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
      localStorage.setItem("current-user", "null");
      return thunkAPI.rejectWithValue(data.message);
    } else if (data.code === 200) {
      return thunkAPI.fulfillWithValue(data.stock);
    }
  }
);

export const updateItemStock = createAsyncThunk(
  "stock/updateItemStock",
  async (item: stockModel, thunkAPI) => {
    const data: responseApiStock = await StockService.updateItem(item);
    if (data.code === 400) {
      localStorage.setItem("current-user", "null");
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
      state.error_stock = false;
      state.loading_stock = false;
      state.success_stock = false;
    },
    updateList: (state, action) => {
      // Atualiza o estoque
      const updatedStock = state.stock.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );

      // Se o item não existir, adiciona o novo item
      if (!updatedStock.some((item) => item.id === action.payload.id)) {
        updatedStock.push(action.payload);
      }

      state.stock = updatedStock;
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
      })
      .addCase(updateItemStock.pending, (state) => {
        state.error_stock = false;
        state.loading_stock = true;
        state.success_stock = false;
      })
      .addCase(updateItemStock.fulfilled, (state) => {
        state.error_stock = false;
        state.success_stock = "Atualizado com sucesso";
        state.loading_stock = false;
      })
      .addCase(updateItemStock.rejected, (state, action) => {
        state.error_stock = action.payload as string;
        state.success_stock = false;
        state.loading_stock = false;
        state.stock = [];
      });
  },
});
export const { resetStock, updateList } = StockSlice.actions;
export default StockSlice.reducer;
