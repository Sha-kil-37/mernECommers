import { createSlice } from "@reduxjs/toolkit";
//
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
