import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICracker } from "../../types";
import { RootState } from "../../store/store";

interface CartState {
  cartItems: ICracker[];
  total: number;
}

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICracker>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calcTotals: (state) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price;
      });
      state.total = total;
    },
  },
});

export const { addItem, deleteItem, calcTotals } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart;

export default cartSlice.reducer;
