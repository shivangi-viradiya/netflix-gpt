import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovieNames: [],
        gptMovieResults: [], // array of arrays (TMDB results per movie name)
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;

            // reset when switching
            state.gptMovieNames = [];
            state.gptMovieResults = [];
        },

        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.gptMovieNames = movieNames;
            state.gptMovieResults = movieResults;
        },
    },
});

export const { toggleSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;