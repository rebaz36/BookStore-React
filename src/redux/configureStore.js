import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './Books/Books';
import categoriesReducer from './Categories/Categories';

const bookReducers = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({
  reducer: bookReducers,
});

export default store;
