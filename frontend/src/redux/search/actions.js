import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://soyummy-gilt.vercel.app/';

export const searchRecipesByName = createAsyncThunk(
  'search/searchRecipesByName',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get('/soyummy/search');

      const filteredRecipes = response.data.recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(name.toLowerCase());
      });

      return filteredRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
