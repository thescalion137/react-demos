import React from "react";
import Home from "./components/routes/home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/Navigation/Navigation";
import Authentication from "./components/routes/authentication/Authentication";

function App() {
  const Shop = () => {
    return <h1>Hello shop</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
