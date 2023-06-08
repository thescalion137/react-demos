import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import ECommerceLogo from "./ECommerce.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="nav-link" to="/">
          <h2>E-Commerce</h2>
          {/* <img src={ECommerceLogo} alt="logo" className="logo" /> */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
          <Link className="nav-link" to="/signIn">
            Login
          </Link>
          {/* <Link className="nav-link" to="/cart">
            Cart
          </Link> */}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
