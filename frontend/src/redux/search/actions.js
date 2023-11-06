import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchRecipesByName = createAsyncThunk(
  'search/searchRecipesByName',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3001/soyummy/search`);

      const filteredRecipes = response.data.recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(name.toLowerCase());
      });

      return filteredRecipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
