import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/user/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
