import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface StepState {
  step: string;
}

// Define the initial state using that type
const initialState: StepState = {
  step: "hello step",
};

export const stepSlice = createSlice({
  name: "step",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<string>) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = stepSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStep = (state: RootState) => state.step.step;

export default stepSlice.reducer;
