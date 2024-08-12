import { createSlice } from "@reduxjs/toolkit";
// 
export const productsLoderDataSlice = createSlice({
  name: "productsLoderData",
  initialState: {
    productsLoderData: {
      searchText: "",
      perPage: 10,
      pageNumber: 1,
    },
  },
  reducers: {
    setProductsLoderData: (state, action) => {
      const { searchText, perPage, pageNumber } = action.payload;
      if (searchText !== undefined) {
        state.productsLoderData.searchText = searchText;
      } else if (perPage !== undefined) {
        state.productsLoderData.perPage = perPage;
      } else if (pageNumber !== undefined) {
        state.productsLoderData.pageNumber = pageNumber;
      }
    },
  },
});
export const { setProductsLoderData } = productsLoderDataSlice.actions;
export default productsLoderDataSlice.reducer;
