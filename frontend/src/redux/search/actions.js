import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchRecipesByName = createAsyncThunk(
  'search/searchRecipesByName',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/soyummy/search?name=${name}`
      );
      return response.data.recipes;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
