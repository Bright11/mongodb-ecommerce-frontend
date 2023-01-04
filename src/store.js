import { configureStore } from "@reduxjs/toolkit"
import productSlice from "./features/productSlice"
import userSlice from "./features/userSlice"
import appApi from "./services/appApi"

//persisting our store
//this import below helps us to keep out data both user credentials and products
// inside our local storage which makes it imposible to be removed
//when we refreshes our page or close our web browser
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk"

//reducers,
//in this combine reducers, we are going to  give our users and product a
//name
const reducer = combineReducers({
    user: userSlice,
    products: productSlice,
    [appApi.reucerPath]: appApi.reducer,
});

const persistConfig = {
    key: "root",
    storage,

    blackList: [appApi.reucerPath, "products"],
};

//this line of code helps us to now persist our store
const persistedReucer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReucer,
    middleware:[thunk,appApi.middleware]
})

export default store;