import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteProduct: (state, action) => {
      return state.filter((Product) => Product.id !== action.payload.id);
    },
    clearProducts: (state, action) => {
      return [];
    },
  },
});
export const { addProduct, deleteProduct, clearProducts } = cartSlice.actions;
export default cartSlice.reducer;
