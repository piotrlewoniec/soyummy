const { createReducer } = require('@reduxjs/toolkit');
const { logIn, fetchUserData } = require('./actions');

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

export const authReducer = createReducer(initialState, {
  [logIn.fulfilled]: (state, action) => {
    state.user = {
      name: action.payload.user.name,
      email: action.payload.user.email,
    };
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },

  [fetchUserData.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.user = {
      name: action.payload.name,
      email: action.payload.email,
      avatarURL: action.payload.avatarURL,
    };
    state.isLoggedIn = true;
  },
});
