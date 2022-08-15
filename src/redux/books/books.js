import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const books = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addNewBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.id !== action.payload),
    }),
  },
});

export const { addNewBook, removeBook } = books.actions;
export default books;
