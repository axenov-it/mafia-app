import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface SettingState {
  settings: any[];
}

// Define the initial state using that type
const initialState: SettingState = {
  settings: [],
};

export const settingSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<string[]>) => {
      state.settings.push({ ...action.payload });
    },
  },
});

export const { setSetting } = settingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSetting = (state: RootState) => state.settings.settings;

export const settingReducer = settingSlice.reducer;
