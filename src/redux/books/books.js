import { v4 as uuidv4 } from 'uuid';

// Actions
const ADD = 'bookstore-react/books/ADD';
const REMOVE = 'bookstore-react/books/REMOVE';

// Reducer
export default function booksReducer(
  state = [
    {
      title: 'First Book',
      author: 'First Author',
      id: uuidv4(),
    },
    {
      title: 'Second Book',
      author: 'Second Author',
      id: uuidv4(),
    },
    {
      title: 'Third Book',
      author: 'Third Author',
      id: uuidv4(),
    },
  ],
  action = {}
) {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default:
      return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
