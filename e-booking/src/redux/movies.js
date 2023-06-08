import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    getMoviesLoading: false,
    moviesList: [],
    getMoviesError: ''
}

const movieSlice = createSlice({
    name: 'Movies',
    initialState: initialState,
    reducers: {
        getMovies: (state) => {
            return { ...state, getMoviesLoading: true }
        },
        getMoviesSuccess: (state, action) => {
            return { ...state, getMoviesLoading: false, moviesList: action.payload }
        },
        getMoviesFailed: (state, action) => {
            return { ...state, getMoviesLoading: false, getMoviesError: action.payload }
        },
    }
})
export const {
    getMovies, getMoviesSuccess, getMoviesError
} = movieSlice.actions

export default movieSlice