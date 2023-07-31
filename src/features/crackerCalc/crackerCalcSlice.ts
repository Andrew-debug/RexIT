import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

export interface CrackerState {
  firstCrop: number;
  secondCrop: number;
  thirdCrop: number;
  fourthCrop: number;
}

const initialState: CrackerState = {
  firstCrop: 0,
  secondCrop: 0,
  thirdCrop: 0,
  fourthCrop: 100,
};

const crackerSlice = createSlice({
  name: "crackerCalc",
  initialState,
  reducers: {
    setCrop: (
      state,
      action: PayloadAction<{
        name: keyof CrackerState;
        value: number;
      }>
    ) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
  },
});

export const { setCrop } = crackerSlice.actions;

export const selectCracker = (state: RootState) => state.crackerCalc;
export const selectCrackerItem = (state: RootState, key: keyof CrackerState) =>
  state.crackerCalc[key];

export default crackerSlice.reducer;
