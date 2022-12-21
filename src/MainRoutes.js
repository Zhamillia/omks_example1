import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import ShopPage from "./components/pages/ShopPage/ShopPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
};

export default MainRoutes;
