const { createReducer } = require('@reduxjs/toolkit');
const { logIn, fetchUserData, logOut } = require('./actions');

const initialState = {
  name: null,
  email: null,
  avatarURL: null,
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authReducer = createReducer(initialState, {
  [logIn.fulfilled]: (state, action) => {
    state.name = action.payload.user.name;
    state.email = action.payload.user.email;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },

  [fetchUserData.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.name = action.payload.name;
    state.avatarURL = action.payload.avatarURL;
    state.isLoggedIn = true;
  },
  [logOut.fulfilled]: state => {
    state.name = null;
    state.email = null;
    state.avatarURL = null;
    state.token = null;
    state.isLoggedIn = false;
    state.isRefreshing = false;
  },
});
