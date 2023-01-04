import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

const initialState = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers: {},
  reducers: {
    //logout
    logout: () => initialState,
  },
  //helps use to stay loged in after registration
  extraReducers: (builder) => {
    builder.addMatcher(
      appApi.endpoints.register.matchFulfilled,
      (_, { payload }) => payload
    );

    //login
    builder.addMatcher(
      appApi.endpoints.login.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end
    //add to cart
    builder.addMatcher(
      //addto cart for items count
      appApi.endpoints.addToCart.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end
    //remove cart

    builder.addMatcher(
      appApi.endpoints.removeFromCart.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end
    //increase cart
    //add to cart
    builder.addMatcher(
      //addto cart for items count
      appApi.endpoints.increaseCart.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end
    //decreas cart
    //add to cart
    builder.addMatcher(
      //addto cart for items count
      appApi.endpoints.decreaseCartProduct.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end createOrder
    //order
    builder.addMatcher(
      appApi.endpoints.createOrder.matchFulfilled,
      (_, { payload }) => payload
    );
    //the end
  },
 
   
});
export const { logout, addNotification, resetNotifications } = userSlice.actions;
export default userSlice.reducer;
