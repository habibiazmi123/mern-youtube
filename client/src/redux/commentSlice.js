import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentComments: [],
    loading: false,
    error: false
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
        },
        fetchSuccess: (state, action) => {
            state.currentComments = action.payload;
            state.loading = true;
        },
        fetchFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        newComment: (state, action) => {
            state.currentComments.unshift(action.payload);
        }
    }
});

export const {fetchStart, fetchSuccess, fetchFailure, newComment} = commentSlice.actions;

export default commentSlice.reducer;