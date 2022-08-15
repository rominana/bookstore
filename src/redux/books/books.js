import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // addBook and removeBook functions
    ADD_BOOK: (state, action) => {
      state.books.push(action.payload);
    },
    REMOVE_BOOK: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { ADD_BOOK, REMOVE_BOOK } = books.actions;
export default books;
