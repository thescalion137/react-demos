import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../screen/admin/addProduct/AddProduct";
import Admin from "../screen/admin/Admin";
import Dashboard from "../screen/dashboard/Dashboard";
import ProductList from "../screen/productList/ProductList";
import ForgotPassword from "../screen/user/ForgotPassword";
import Login from "../screen/user/Login";
import RegisterUser from "../screen/user/RegisterUser";
import Navbar from "./navbar/Navbar";

const RootNavigator = () => {
  const [user, setLoginUser] = useState({});
  console.log("user from navigation", user);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Dashboard />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/signUp" element={<RegisterUser />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productList" element={<ProductList />} />
      </Route>
    </Routes>
  );
};

export default RootNavigator;
