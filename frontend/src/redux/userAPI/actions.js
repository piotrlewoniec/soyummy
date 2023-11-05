import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000/';

const setHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const logIn = createAsyncThunk(
  'AUTH/LOGIN',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('api/v1/users/login', {
        email,
        password,
      });
      console.log(response.data);
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
      return { name, avatarURL };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to retrieve user data.');
    }
  }
);
