import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice.ts";

export const store = configureStore({
  reducer: { language: languageReducer },
});

// Типізація RootState і AppDispatch для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
