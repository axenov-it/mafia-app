import { configureStore } from "@reduxjs/toolkit";
import actionReduser from "./modules/action";
import gameReduser from "./modules/game";

export const store = configureStore({
  reducer: {
    action: actionReduser,
    game: gameReduser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
