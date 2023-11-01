import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './actions';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCategories.pending]: handlePending,
    [fetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCategories.rejected]: handleRejected,
  },
});

export const categoriesReducer = categoriesSlice.reducer;
