import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product/product.slice";

export const store = configureStore({
  reducer: {
    reducerProduct: productReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;