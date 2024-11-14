import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/AuthService";
import { authState, userCredentials } from "../types/auth/authType";
import { responseApiType } from "../types/response-api/responseApiTypes";

const initialState: authState = {
  auth: localStorage.getItem("current-user") === "active" ? true : false,
  error_login: false,
  success_login: false,
  loading_login: false,
};

export const loginUSer = createAsyncThunk(
  "login/loginUser",
  async (dt: userCredentials, thunkAPI) => {
    const data: responseApiType = await AuthService.signin({
      email: dt.email,
      password: dt.password,
    });
    if (data.code === 400 || data.code === 500) {
      return thunkAPI.rejectWithValue(data.message);
    } else if (data.code === 200) {
      return thunkAPI.fulfillWithValue(data.message);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.auth = false;
      state.error_login = false;
      state.loading_login = false;
      state.success_login = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUSer.pending, (state) => {
        state.error_login = false;
        state.loading_login = true;
        state.success_login = false;
        state.auth = false;
      })
      .addCase(loginUSer.fulfilled, (state, action) => {
        state.error_login = false;
        state.success_login = action.payload as string;
        state.loading_login = false;
        state.auth = true;
      })
      .addCase(loginUSer.rejected, (state, action) => {
        state.error_login = action.payload as string;
        state.success_login = false;
        state.loading_login = false;
        state.auth = false;
      });
  },
});
export const { resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
