import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './userAPI/reducers';
import storage from 'redux-persist/lib/storage';
import { categoriesReducer } from './categories/slice';
import searchReducer from './search/reducer';
import dataReducer from './slice/addRecipeForm';
import addRecipeReducer from './slice/addRecipe';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    auth: persistReducer(persistConfig, authReducer),
    search: searchReducer,
    data: dataReducer,
    addRecipe: addRecipeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
