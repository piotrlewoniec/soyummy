import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';
export const fetchCategories = createAsyncThunk(
  'categories/FETCH',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/soyummy/recipes/category-list');
      const categories = response.data.categories;
      //   console.log(categories);
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
