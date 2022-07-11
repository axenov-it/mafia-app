import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { RoleInterface } from "common/interfaces";

// Define a type for the slice state
interface SettingState {
  countGamers: number;
  roles: RoleInterface[];
}

// Define the initial state using that type
const initialState: SettingState = {
  countGamers: 0,
  roles: [],
};

export const settingSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSetting: (
      state,
      action: PayloadAction<{ roles: RoleInterface[]; countGamers: number }>
    ) => {
      state.roles = action.payload.roles;
      state.countGamers = action.payload.countGamers;
    },
  },
});

export const { setSetting } = settingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSetting = (state: RootState) => state.settings;

export const settingReducer = settingSlice.reducer;
