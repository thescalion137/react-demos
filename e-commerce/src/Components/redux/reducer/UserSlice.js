import { Alert, AlertTitle } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addUserLoading: false,
  addedUser: null,
  addUserError: "",
};

// Generates pending, fulfilled and rejected action types
export const addUser = createAsyncThunk("user/addUser", (user) => {
  console.log("user :-----", user);
  return axios
    .post("http://localhost:8000/users", user)
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
      alert("user Added successfully you can login now");
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.addUserError = action.error.message;
      alert(action.error.message);
    });
  },
});

export default usersSlice.reducer;
