import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchCategoryMeals,
  fetchRecipes,
  fetchSomeCategories,
} from './actions';

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
    mealsFiltered: [],
    somecategories: [],
    recipes: [],
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
    [fetchSomeCategories.pending]: handlePending,
    [fetchSomeCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.somecategories = action.payload;
    },
    [fetchSomeCategories.rejected]: handleRejected,
    [fetchCategoryMeals.pending]: handlePending,
    [fetchCategoryMeals.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.mealsFiltered = action.payload;
    },
    [fetchCategoryMeals.rejected]: handleRejected,
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,
  },
});

export const categoriesReducer = categoriesSlice.reducer;
