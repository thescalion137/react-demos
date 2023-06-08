import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item-container">
      <img src={item.img} alt="" className="product-img" />
      <div className="info">
        <h1 className="product-title">{item.title}</h1>
        <button className="btn-shop-now">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
