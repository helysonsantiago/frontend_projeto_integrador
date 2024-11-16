import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { responseApiType } from "../types/response-api/responseApiTypes";
import { userStates } from "../types/user/usertypes";
import UserService from "../services/UserService";
import { userUpdate } from "../pages/general-configs/GeneralConfigs";

const initialState: userStates = {
  user: null,
  error_user: false,
  success_user: false,
  loading_user: false,
};

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user : userUpdate, thunkAPI) => {
    const data: responseApiType = await UserService.getUserByID(user);
    if (data.code === 400) {
      localStorage.setItem("current-user", "null");
      return thunkAPI.rejectWithValue(data.message);
    } else if (data.code === 200) {
      return thunkAPI.fulfillWithValue(data.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.error_user = false;
      state.loading_user = false;
      state.success_user = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.error_user = false;
        state.loading_user = true;
        state.success_user = false;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.error_user = false;
        state.success_user = true;
        state.loading_user = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error_user = action.payload as string;
        state.success_user = false;
        state.loading_user = false;
      });
  },
});

export default userSlice.reducer;
