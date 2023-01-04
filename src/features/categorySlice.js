import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = [];

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    allcategory: (_, action) => {
      return action.payload;
    }
  },
});
//const { logout, addNotification, resetNotifications } = userSlice.actions;
export const { allcategory } = categorySlice.actions;
export default categorySlice.reducer;
