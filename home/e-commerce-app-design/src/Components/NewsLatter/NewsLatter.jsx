import React from "react";
import "./NewsLatter.css";
import { FiSend } from "react-icons/fi";

const NewsLatter = () => {
  return (
    <div className="newslatter-container">
      <h1 className="newsLatterTitle">Newsletter</h1>
      <div className="description">
        Get timely updates from your favorite products.
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Your Email" className="input" />
        <button className="btnSend">
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default NewsLatter;
