import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface ActionState {
  action: string;
}

// Define the initial state using that type
const initialState: ActionState = {
  action: "hello action",
};

export const actionSlice = createSlice({
  name: "action",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAction: (state, action: PayloadAction<string>) => {
      state.action = action.payload;
    },
  },
});

export const { setAction } = actionSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAction = (state: RootState) => state.action.action;

export default actionSlice.reducer;