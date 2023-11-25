import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { SingleProduct } from "./SingleProduct";
import { Homepage } from "./Homepage";
import { Cart } from "./Cart";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/products" />} />
        <Route path="/products" element={<Homepage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};
