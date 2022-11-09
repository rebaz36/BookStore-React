import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';

function Booklist() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <Book
            title={book.title}
            author={book.author}
            itemId={book.item_id}
            category={book.category}
          />
        </li>
      ))}
    </ul>
  );
}
export default Booklist;
