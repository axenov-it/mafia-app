import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { PresetInterface } from "common/interfaces";
import initialRoles from "mocks/presets.json";

// Define a type for the slice state
interface SettingState {
  isStartGame: boolean;
  countGamers: number;
  preset: PresetInterface;
}

// Define the initial state using that type
const initialState: SettingState = {
  isStartGame: true,
  countGamers: initialRoles[0].type,
  preset: initialRoles[0].presets[0],
};

export const settingSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSetting: (
      state,
      action: PayloadAction<{ preset: PresetInterface; countGamers: number }>
    ) => {
      state.preset = action.payload.preset;
      state.countGamers = action.payload.countGamers;
    },
    setStartGame: (state, action: PayloadAction<boolean>) => {
      state.isStartGame = action.payload;
    },
  },
});

export const { setSetting, setStartGame } = settingSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSetting = (state: RootState) => state.settings;

export const selectSettingsCountGamers = (state: RootState) =>
  state.settings.countGamers;

export const selectSettigsPreset = (state: RootState) => state.settings.preset;

export const selectIsStartGame = (state: RootState) =>
  state.settings.isStartGame;

export const settingReducer = settingSlice.reducer;
