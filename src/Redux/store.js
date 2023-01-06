import { configureStore } from "@reduxjs/toolkit";
import {productSlice} from "./DataSlice"

export const store = configureStore({
    
  reducer: {
    productSlice: productSlice.reducer
  },
});
