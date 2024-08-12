import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Test from "./components/Test";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
//
const App = () => {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/product-details/:id" element={<ProductsDetailsPage />} />
    </Routes>
  );
};

export default App;
