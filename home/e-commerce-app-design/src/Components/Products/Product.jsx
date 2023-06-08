import React from "react";
import "./Product.css";
import { IoCartOutline } from "react-icons/io5";
import { FiSearch, FiHeart } from "react-icons/fi";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <div className="circle"> </div>
      <img src={item.img} alt="" className="img" />

      <Info>
        <div className="icon">
          <IoCartOutline className="card-icon" />
        </div>
        <div className="icon">
          <FiSearch className="card-icon" />
        </div>
        <div className="icon">
          <FiHeart className="card-icon" />
        </div>
      </Info>
    </Container>
  );
};

export default Product;
