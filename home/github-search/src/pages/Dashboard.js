import React from "react";
import { Info, Repos, Search, User, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";

const Dashboard = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
