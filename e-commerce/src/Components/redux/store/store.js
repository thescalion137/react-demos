import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../reducer/CounterSlice";
import ProductReducer from "../reducer/ProductSlice";
import UserReducer from "../reducer/UserSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    users: UserReducer,
    products: ProductReducer,
  },
});

export default store;
