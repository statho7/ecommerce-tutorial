import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;
      product.date = Date.now();
      state.quantity += 1;
      state.products.push(product);
      state.total += action.payload.price * action.payload.quantity;
    },
    editProduct: (state, action) => {
      console.log(action.payload);
      // state.quantity = action.payload.quantity;
      // state.products.push(action.payload.product);
      // state.total = action.payload.total;
      // state.quantity = 0;
      // state.products = [];
      // state.total = 0;
    },
    removeProduct: (state, action) => {
      console.log(action.payload);
      // state.quantity -= 1;
      // state.products = state.products.filter(product => product.date !== action.payload.product.date);
      // state.total -= action.payload.product.price * action.payload.product.quantity;
      // state.quantity = 0;
      // state.products = [];
      // state.total = 0;
    },
  },
});

export const { addProduct, editProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;