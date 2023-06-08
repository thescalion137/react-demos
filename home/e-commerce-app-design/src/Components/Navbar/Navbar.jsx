import React from "react";
import "./Navbar.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Badge } from "@mui/material";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="wrapper">
        <div className="left">
          <div className="language">EN</div>
          <div className="search-container">
            <input type="search" className="search-inputbox" />
            <FaSearch color="gray" fontSize={16} />
          </div>
        </div>
        <div className="center">
          <div className="logo">
            <h1>LAMA.</h1>
          </div>
        </div>
        <div className="right">
          <div className="menu-item">REGISTER</div>
          <div className="menu-item">SIGN IN</div>

          <div className="menu-item">
            <Badge color="secondary" badgeContent={3}>
              <FaShoppingCart size={25} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
