import { createAsyncThunk } from '@reduxjs/toolkit';

import { CATEGORY_BOOK } from '../Actions';

// API URL
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kcM4ut7Kvp9QgSxmujh0/books';

const getCategories = createAsyncThunk(CATEGORY_BOOK, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export default getCategories;
