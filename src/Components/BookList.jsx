import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getBooks } from '../Redux/Books/BooksAPI';
import Book from './Book';

function Booklist() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const books = useSelector((state) => state.books, shallowEqual);

  return (
    <ul>
      {books.map((book) => (
        <Book key={book.item_id} BOOK={book} />
      ))}
    </ul>
  );
}

export default Booklist;
