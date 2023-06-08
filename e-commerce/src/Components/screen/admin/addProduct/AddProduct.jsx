import React from "react";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import Copyright from "../../copyright/Copyright";
import { addProduct } from "../../../redux/reducer/ProductSlice";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const clear = () => {
    setProductName("");
    setProductImage("");
    setProductCategory("");
    setProductDescription("");
    setProductPrice("");
  };

  const handleRegiserUser = (event) => {
    event.preventDefault();
    const id = uuid();
    const product = {
      id: id,
      productName: productName,
      productImage: productImage,
      productCategory: productCategory,
      productDescription: productDescription,
      productPrice: productPrice,
    };
    dispatch(addProduct(product));
    clear();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Add Product
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleRegiserUser}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {productImage != "" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={productImage}
                    alt="..."
                    height={150}
                    width={150}
                  ></img>
                </div>
              ) : (
                ""
              )}
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                component="label"
                style={{ display: "flex" }}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    setProductImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                name="productName"
                required
                fullWidth
                id="productName"
                label="Product Name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
                fullWidth
                type="text"
                id="productCategory"
                label="Product Category"
                name="productCategory"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
                fullWidth
                type="text"
                id="productDescription"
                label="Product Description"
                name="productDescription"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
                fullWidth
                name="productPrice"
                label="Product price"
                type="text"
                id="productPrice"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Product
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default AddProduct;
