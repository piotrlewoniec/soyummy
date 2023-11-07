import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = ' http://localhost:3000';

export const fetchOneRecipes = createAsyncThunk(
  'fetch/onerecipse',
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`/soyummy/recipe/${id}`);
      const recipe = response.data.recipe;

      return recipe;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'categories/FETCH',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/soyummy/recipes/category-list');
      const categories = response.data.categories;

      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchSomeCategories = createAsyncThunk(
  'categories/fetchSome',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/soyummy/recipes/category-list');
      const categories = response.data.categories.filter(category =>
        ['Breakfast', 'Chicken', 'Miscellaneous', 'Dessert'].includes(
          category.title
        )
      );

      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const arr = ['Breakfast', 'Chicken', 'Miscellaneous', 'Dessert'];

export const fetchCategoryMeals = createAsyncThunk(
  'categories/fetchMeals',
  async (categories, thunkAPI) => {
    try {
      const response = await axios.get(`/soyummy/recipes`);
      const recipes = response.data.recipes;
      const filteredRecipes = recipes.filter(recipe =>
        arr.includes(recipe.category)
      );

      return filteredRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'categories/fetchMeals',
  async ({ categories }, thunkAPI) => {
    try {
      const response = await axios.get(`/soyummy/recipes/${categories}`);
      const recipes = response.data.recipes;

      return recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchIngredients = createAsyncThunk(
  'ingredients/FETCH',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/soyummy/ingredients');
      const igredients = response.data.igredients;

      return igredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
