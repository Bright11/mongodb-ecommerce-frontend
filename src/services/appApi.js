import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1000" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "/users/register",
        method: "POST",
        body: user,
      }),
    }), //
    login: builder.mutation({
      query: (user) => ({
        url: "/users/login",
        method: "POST",
        body: user,
      }),
    }), //
    category: builder.mutation({
      query: (category) => ({
        url: "/category/",
        body: category,
        method: "POST",
      }),
    }),
    //creating product query for insert
    createproduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        body: product,
        method:"POST"
      })
    }),
    //the end
    //this code below is for add to cart
    addToCart: builder.mutation({
      query: (cartinfo) => ({
        url: "/products/add-to-cart",
        body: cartinfo,
        method:"POST",
      }),
    }),
    //and it ends here
    //REMOVING ITEM IN THE CART CODE
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: "/products/remove-from-cart",
        body: body,
        method:"POST",
      }),
    }),

    //THE END OF THE CODE

    //INCREASED CART CODE IS HERE

    increaseCart: builder.mutation({
      query: (body) => ({
        url: "/products/increase-cart",
        body,
        method:"POST",

      }),
    }),
    //THE END
    //decrease cart
    decreaseCartProduct: builder.mutation({
      query: (body) => ({
        url: "/products/decrease-cart",
        body,
        method:"POST"
      }),
    }),

    //the end

    //creating an other
    createOrder: builder.mutation({
      query: (body) => ({
        url: "/orders",
        method: "POST",
        body,
      }),
    }),
    //the end
  }),
});

export const { useRegisterMutation, useLoginMutation, useCategoryMutation,useCreateproductMutation,useAddToCartMutation,useRemoveFromCartMutation,useIncreaseCartMutation,useDecreaseCartProductMutation,useCreateOrderMutation } = appApi;
export default appApi;