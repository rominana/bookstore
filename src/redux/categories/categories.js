import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: '',
};

const categories = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CHECK_STATUS: (state, action) => ({
      ...state,
      categories: action.payload,
    }),
  },
});

export const { CHECK_STATUS } = categories.actions;
export default categories;
