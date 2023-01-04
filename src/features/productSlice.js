import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = [];

export const productSlice = createSlice({
  name: "products",
  initialState,
  // reducers: {},
  reducers: {
    //code to get product from our backend api
    updateproducts: (_, action) => {
      return action.payload;
    }
    //the end
  },
});
export const { updateproducts } = productSlice.actions;
export default productSlice.reducer;
