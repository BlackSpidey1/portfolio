import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import githubSlice from "./github/githubSlice";
// import githubSlice from "@/store/github/githubSlice";
// import themeSlice from "@/store/theme/themeSlice";


export const store = configureStore({
  reducer: {
    github: githubSlice,
    theme: themeSlice,
  },
});
