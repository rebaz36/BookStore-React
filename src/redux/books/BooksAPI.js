import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_BOOKS, ADD_BOOK, REMOVE_BOOK } from '../actions';

// API URL
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kcM4ut7Kvp9QgSxmujh0/books';

export const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (itemId) => {
  await fetch(`${URL}/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
