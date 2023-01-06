import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isloading: false,
  product: null,
  productData:{
    similar: [],
    images: [],
    rates:[],
  },
  error: null,
};

export const getProduct = createAsyncThunk(
  "product/getProduct", //type
  async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios.get("https://brocarshop.com/api/en/products/13");
      return data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.isloading = false;
      state.product = action.payload.payload.product;
      state.similar = action.payload.payload.similar;
      const imgs = action.payload.payload.product.sizes[0]?.colors.map((e) => {
        return { original: e.images[0].image, thumbnail: e.images[0].image };
      });
      state.productData ={
        similar:action.payload.payload.similar,
        images: imgs,
        rates:action.payload.payload.product.rates
      }
      state.images = imgs;
    },
    [getProduct.rejected]: (state, action) => {
      state.error = action.payload;
      state.isloading = false;
    },
  },
});
