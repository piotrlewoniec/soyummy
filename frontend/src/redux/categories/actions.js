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

export const fetchSomeCategories = createAsyncThunk(
  'categories/fetchSome',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      const categories = response.data.categories.filter(category =>
        ['Breakfast', 'Chicken', 'Miscellaneous', 'Dessert'].includes(
          category.strCategory
        )
      );
      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryMeals = createAsyncThunk(
  'categories/fetchMeals',
  async (categories, thunkAPI) => {
    try {
      const requests = categories.map(category =>
        axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`
        )
      );
      const responses = await Promise.all(requests);
      const categoryMeals = responses.map((response, index) => {
        const data = response.data;
        return {
          category: categories[index].strCategory,
          meals: data.meals.slice(0, 4),
        };
      });
      console.log('categoryMeals in action:', categories);
      return categoryMeals;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
