import React from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Admin panel</h3>
      <button onClick={() => navigate("/addProduct")}>Add Product</button>
    </div>
  );
};

export default Admin;
