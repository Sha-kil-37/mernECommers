import { createSlice } from "@reduxjs/toolkit";

export const categorysSlice = createSlice({
  name: "categorys",
  initialState: {
    categorys: [],
  },
  reducers: {
    setCategorys: (state, action) => {
      state.categorys = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategorys } = categorysSlice.actions;
export default categorysSlice.reducer;
