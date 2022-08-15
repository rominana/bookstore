import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
  },
});

export const { checkStatus } = categories.actions;
export default categories;
