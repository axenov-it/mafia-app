import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface GameState {
  game: string;
}

// Define the initial state using that type
const initialState: GameState = {
  game: "hello game",
};

export const gameSlice = createSlice({
  name: "game",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGame: (state, action: PayloadAction<string>) => {
      state.game = action.payload;
    },
  },
});

export const { setGame } = gameSlice.game;

// Other code such as selectors can use the imported `RootState` type
export const selectGame = (state: RootState) => state.game.game;

export default gameSlice.reducer;
