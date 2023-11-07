import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchCategoryMeals,
  fetchIngredients,
  fetchOneRecipes,
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
    meals: [],
    ingr: [],
    somecategories: [],
    recipes: [],
    oneRecipe: [],
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
      state.meals = action.payload;
    },
    [fetchCategoryMeals.rejected]: handleRejected,
    [fetchRecipes.pending]: handlePending,
    [fetchRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.recipes = action.payload;
    },
    [fetchRecipes.rejected]: handleRejected,
    [fetchOneRecipes.pending]: handlePending,
    [fetchOneRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.oneRecipe = action.payload;
    },
    [fetchOneRecipes.rejected]: handleRejected,
    [fetchIngredients.pending]: handlePending,
    [fetchIngredients.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.ingr = action.payload;
    },
    [fetchIngredients.rejected]: handleRejected,
  },
});

export const categoriesReducer = categoriesSlice.reducer;
