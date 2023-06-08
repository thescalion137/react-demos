import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="left">
        <div className="logo">LAMA.</div>
        <p className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="socialContainer">
          <div className="socialIcon" style={{ backgroundColor: "#3B5999" }}>
            <FaFacebook />
          </div>
          <div className="socialIcon" style={{ backgroundColor: "#E4405F" }}>
            <AiFillInstagram />
          </div>
          <div className="socialIcon" style={{ backgroundColor: "#55ACEE " }}>
            <BsLinkedin />
          </div>
        </div>
      </div>
      <div className="center">
        <h3 className="linksTitle">Useful Links</h3>
        <div className="list">
          <li className="listItem">Home</li>
          <li className="listItem">Cart</li>
          <li className="listItem">Man Fashion</li>
          <li className="listItem">Woman Fashion</li>
          <li className="listItem">Accessories</li>
          <li className="listItem">My Account</li>
          <li className="listItem">Order Tracking</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Wishlist</li>
          <li className="listItem">Terms</li>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Footer;
