import { configureStore } from "@reduxjs/toolkit";
import categorys from "./slices/categorys";
import productsLoderData from "./slices/productsLoderData";
import products from "./slices/products";
//
export default configureStore({
  reducer: {
    categorys: categorys,
    productsLoderData: productsLoderData,
    products: products,
  },
});
