import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { StepInterface } from "../../common/interfaces";

// Define the initial state using that type
const initialState: StepInterface = {
  isActive: false,
  type: "acquaintance",
  scene: "roleset",
  isRepeat: false,
  isRequired: true,
  isUsed: false,
  action: "acquaintance",
  gamerRoleTime: 1,
};

export const stepSlice = createSlice({
  name: "step",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<StepInterface>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStep } = stepSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStep = (state: RootState) => state.step;

export const stepReducer = stepSlice.reducer;
