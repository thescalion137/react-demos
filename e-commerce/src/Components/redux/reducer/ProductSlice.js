import { Alert, AlertTitle } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getProductsLoading: false,
  Products: [],
  getProductsError: "",
  addProductLoading: false,
  addedProduct: null,
  addProductError: "",
};

// Generates pending, fulfilled and rejected action types
export const getProducts = createAsyncThunk("user/getProducts", () => {
  return axios
    .get("http://localhost:8000/products")
    .then((response) => response.data);
});

export const addProduct = createAsyncThunk("user/addProduct", (product) => {
  console.log("products :-----", product);
  return axios
    .post("http://localhost:8000/products", product)
    .then((response) => response.data);
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    //get products
    builder.addCase(getProducts.pending, (state) => {
      state.getProductsLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.getProductsLoading = false;
      state.Products = action.payload;
      state.getProductsError = "";
      console.log("fetched products : --", action.payload);
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.getProductsLoading = false;
      state.Products = [];
      state.getProductsError = action.error.message;
      alert(action.error.message);
    });
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
    });
    //Add users
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.addedUser = action.payload;
      state.addUserError = "";
      alert("Product  Added successfully");
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.addUserError = action.error.message;
      alert(action.error.message);
    });
  },
});

export default productSlice.reducer;
