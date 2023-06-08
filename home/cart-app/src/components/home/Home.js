import React from "react";
import { Card } from "react-bootstrap";
import Products from "../products/Products";
const Home = () => {
  return (
    <div className="hero">
      <Card className="bg-dark text-white border-0">
        <Card.Img
          src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt="Card image"
          height="500px"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <Card.Title className="display-3 fw-bolder mb-0">
            NEW SEASON ARRIVALS
          </Card.Title>
          <Card.Text className="lead fs-2">CHECK OUT ALL THE TRENDS</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Products />
    </div>
  );
};

export default Home;
