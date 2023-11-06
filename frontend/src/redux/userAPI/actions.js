import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-gilt.vercel.app/';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const logIn = createAsyncThunk(
  'AUTH/LOGIN',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('api/v1/users/login', {
        email,
        password,
      });
      setHeader(response.data.data.token);
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'AUTH/CURRENT',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    setHeader(state.auth.token);
    try {
      console.log(state);
      const response = await axios.get('api/v1/users/current');
      const avatarURL = response.data.data.avatarURL;
      const name = response.data.data.name;
      const favorites = response.data.data.favorites;
      return { name, avatarURL, favorites };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve user data.');
    }
  }
);

export const logOut = createAsyncThunk('AUTH/LOG_OUT', async (_, thunkAPI) => {
  try {
    await axios.get('api/v1/users/logout');
    clearToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
