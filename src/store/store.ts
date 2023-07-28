import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import crackerCalcReducer from "../features/crackerCalc/crackerCalcSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    crackerCalc: crackerCalcReducer,
  },
});
export default store;
