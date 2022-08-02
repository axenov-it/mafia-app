import { configureStore } from "@reduxjs/toolkit";
import { gamersReducer, stepReducer, settingReducer } from "./slices";

export const store = configureStore({
  reducer: {
    games: gamersReducer,
    step: stepReducer,
    settings: settingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
