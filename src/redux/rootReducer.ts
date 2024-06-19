import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { backgroundReducer } from './background';
import { filtersReducer } from './filters';
import { notesReducer } from './notes';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  background: backgroundReducer,
  notes: notesReducer,
  filters: filtersReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);