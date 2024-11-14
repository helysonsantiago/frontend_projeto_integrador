import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { responseApiStock } from "../types/response-api/responseApiTypes";
import { userStates } from "../types/user/usertypes";


const initialState: userStates = {
  user: null,
  error_user: false,
  success_user: false,
  loading_user: false,
};

export const getUser = createAsyncThunk(
  "stock/getUser",
  async (_, thunkAPI) => {
    const data: responseApiStock = await UserService.getUser();
    if (data.code === 400) {
      localStorage.setItem("current-user", "null");
      return thunkAPI.rejectWithValue(data.message);
    } else if (data.code === 200) {
      return thunkAPI.fulfillWithValue(data.stock);
    }
  }
);



export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
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
      })
      .addCase(newItemStock.pending, (state) => {
        state.error_stock = false;
        state.loading_stock = true;
        state.success_stock = false;
      })
      .addCase(newItemStock.fulfilled, (state) => {
        state.error_stock = false;
        state.success_stock = "Adicionado com sucesso";
        state.loading_stock = false;
      })
      .addCase(newItemStock.rejected, (state, action) => {
        state.error_stock = action.payload as string;
        state.success_stock = false;
        state.loading_stock = false;
        state.stock = [];
      });
  },
});
export const { resetStock, updateList, addList } = StockSlice.actions;
export default StockSlice.reducer;
