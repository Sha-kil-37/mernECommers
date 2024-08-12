import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Products from "../components/Products";
// import { getAllProduct } from "../api/productApi";
// import { useEffect } from "react";
// import ProductsLoder from "../components/ProductsLoder";
//
const MainLayout = (props) => {
  

  //
  return (
    <section>
      <div className="container mx-auto">
        <Navbar />
        <Header />
        {props.children}
        <Pagination />
        <Footer />
      </div>
    </section>
  );
};

export default MainLayout;
