import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      const currentTheme = state.theme == "dark" ? "light" : "dark";
      state.theme = currentTheme;
      
      localStorage.setItem("theme", currentTheme);
    },
    initTheme(state) {
      // функция которая берет данные обратно с localStorage
      const getTheme = localStorage.getItem("theme");
      if (getTheme) {
        state.theme = getTheme;
      }
    },
  },
  extraReducers: (builder) => {},
});

export const { toggleTheme, initTheme } = themeSlice.actions;

export default themeSlice.reducer;
