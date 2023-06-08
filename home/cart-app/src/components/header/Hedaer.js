import React from "react";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
import { IoCartOutline, IoPersonAddOutline } from "react-icons/io5";

import Button from "@mui/material/Button";
const Hedaer = () => {
  const products = useSelector((state) => state.products);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand to="/">La Collection</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/products" className="nav-link">
                Products
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
            <Button variant=" me-2">
              <IoMdLogIn /> &nbsp; Login
            </Button>

            <Button variant=" me-2" color="error">
              <IoPersonAddOutline /> &nbsp; Register
            </Button>
            <Button variant=" me-2" onClick={() => navigate("/cart")}>
              <IoCartOutline /> &nbsp; Cart ({products.length})
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hedaer;
