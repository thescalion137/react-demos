import React from "react";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const { state } = useLocation();
  const { category } = state;
  console.log(category);
  return <div>ProductList</div>;
};

export default ProductList;
