import React from "react";
import Announcement from "../Components/Announcement/Announcement";
import Categories from "../Components/Categories/Categories";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import NewsLatter from "../Components/NewsLatter/NewsLatter";
import Products from "../Components/Products/Products";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLatter />
      <Footer />
    </div>
  );
};

export default Home;
