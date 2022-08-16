// Ducks: Redux Reducer Bundles
// ACTIONS
const CREATE = 'CREATE';
const REMOVE = 'REMOVE';

// REDUCER
export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE:
      return state.concat([action.book]);
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
