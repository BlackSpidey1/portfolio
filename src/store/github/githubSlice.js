import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  repositories: null,
  isLoading:false,
};

export const getRepositories = createAsyncThunk(
  "github/getRepositories",
  async () => {
    const result = await axios.get(
      "https://65ed879908706c584d99fa01.mockapi.io/projects",
    );

    const data = result.data;

    return data;
  },
);

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    // filter: (state, action) => {
    //   if (action.payload) {
    //     state.repositories = state.repositories?.filter(
    //       (repository) => repository[action.payload] === "true",
    //     );
    //   } else {
    //     state.repositories = state.repositories;
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepositories.fulfilled, (state, action) => {
      state.repositories = action.payload;
      state.isLoading = false
    });
    builder.addCase(getRepositories.pending, (state) => {
      state.isLoading = true
    });
    builder.addCase(getRepositories.rejected, (state) => {
      state.isLoading = false
    });
  },
});

export const { filter } = githubSlice.actions;

export default githubSlice.reducer;
