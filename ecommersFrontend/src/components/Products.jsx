import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getAllProduct } from "../api/productApi";
import { setProducts } from "../redux/slices/products";
import store from "../redux/store";
//
const Products = () => {
  //
  const productsLoderData = useSelector(
    (state) => state.productsLoderData.productsLoderData
  );
  const products = useSelector((state) => state.products.products);
 
  //
  // get all product
  useEffect(() => {
    getAllProduct(productsLoderData)
      .then((res) => {
        if (res.status === 200) {
          store.dispatch(setProducts(res.data[0]));
        } else {
          store.dispatch(setProducts(null));
        }
      })
      .catch((error) => {
        store.dispatch(setProducts(null));
      });
  }, [productsLoderData]);
  //
  return (
    <section className="flex flex-wrap py-2">
      {products?.rows.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </section>
  );
};

export default Products;
