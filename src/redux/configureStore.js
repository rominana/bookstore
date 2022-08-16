import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

// eslint-disable-next-line no-unused-vars
const storeData = configureStore({ booksReducer, categoriesReducer });
