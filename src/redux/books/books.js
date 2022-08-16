// Initial State
const defaultState = [
  {
    title: 'Book 1',
    author: 'Author 1',
    id: '1',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    id: '2',
  },
];

// Actions
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

// Reducer
export default function booksReducer(state = defaultState, action = {}) {
  switch (action.type) {
    case CREATE:
      return state.concat(action.book);
    case REMOVE:
      return state.filter((book) => JSON.stringify(book) !== JSON.stringify(action.book));
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
