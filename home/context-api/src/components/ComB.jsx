import React, { useContext } from "react";
import ComC from "./ComC";
import { FirstName, LastName } from "../App";

const ComB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <div>
      <h1>
        my name is {fname} {lname}
      </h1>
      {/* <ComC /> */}
    </div>
  );
};

export default ComB;
