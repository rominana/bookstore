// Initial State
const defaultState = [
  {
    title: 'Book 1',
    author: 'Author 1',
    id: '1',
  },

];

// Ducks: Redux Reducer Bundles
// Actions
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

// Reducer
export default function booksReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE, book };
}

export function removeBook(book) {
  return { type: REMOVE, book };
}
