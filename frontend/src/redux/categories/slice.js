import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchCategoryMeals,
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
    categoryRecipes: {},
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
      state.items = action.payload;
    },
    [fetchSomeCategories.rejected]: handleRejected,
    [fetchCategoryMeals.pending]: handlePending,
    [fetchCategoryMeals.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      const categoryMeals = action.payload;
      categoryMeals.forEach(categoryMeal => {
        state.categoryRecipes[categoryMeal.category] = categoryMeal.meals;
      });
      console.log('categoryRecipes in reducer:', state.categoryRecipes);
    },
    [fetchCategoryMeals.rejected]: handleRejected,
  },
});

export const selectCategories = state => state.categories.items;
export const selectCategoryRecipes = state => state.categories.categoryRecipes;
export const selectLoading = state => state.categories.isLoading;

export const categoriesReducer = categoriesSlice.reducer;
