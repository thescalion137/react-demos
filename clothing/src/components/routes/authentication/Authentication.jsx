import React from "react";
import SignUp from "../../sign-up/SignUp";
import SignIn from "../../sign-in/SignIn";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
