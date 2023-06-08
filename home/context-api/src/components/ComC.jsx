import React from "react";
import { FirstName } from "../App";

const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return <h1>i'm {fname} makwana</h1>;
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
