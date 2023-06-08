import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const initialState = {
  addUserLoading: false,
  addedUser: null,
  addUserError: "",
};

// Generates pending, fulfilled and rejected action types
export const addUser = createAsyncThunk("user/addUser", (user) => {
  console.log("user :-----", user);
  return axios
    .post(`${BASE_URL}/users`, user)
    .then((response) => response.data);
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.addedUser = action.payload;
      state.addUserError = "";
      alert("user Registered successfully you can login now");
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.addUserError = action.error.message;
      alert(action.error.message);
    });
  },
});

export default usersSlice.reducer;
