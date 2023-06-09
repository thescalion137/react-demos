import React from "react";
import { useContext } from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../context/userContext";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("current user : ----", currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
