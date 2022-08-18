/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AVzrBGcVDScpYtp9JvH1/books';

// First, create the thunk
export const fetchBooks = createAsyncThunk(
  'users/fetchBooks',
  async () => {
    try {
      const response = await axios.get(BOOKS_API);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    try {
      const response = await axios.post(BOOKS_API, newBook);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (bookId) => {
    try {
      const response = await axios.delete(`${BOOKS_API}/${bookId}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// handle actions in your reducers
export const booksStatus = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'done';
        state.books = state.books.concat(action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, () => {
        window.location.reload(false);
      })
      .addCase(removeBook.fulfilled, () => {
        window.location.reload(false);
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default booksStatus.reducer;
