import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./bank-slice";
import cartSlice from "./cart-slice";

export const store = configureStore({
  reducer: {
    bank: bankSlice,
    cart: cartSlice,
  },
});
