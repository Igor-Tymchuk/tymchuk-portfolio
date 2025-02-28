import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "../i18n.ts";

interface LanguageState {
  lang: "en" | "ua";
}

const initialState: LanguageState = { lang: "en" };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ua" | "en">) => {
      state.lang = action.payload;
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
