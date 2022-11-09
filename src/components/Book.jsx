import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/BooksAPI';

function Book({ BOOK }) {
  const {
    title,
    author,
    // eslint-disable-next-line camelcase
    item_id,
    category
  } = BOOK;

  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {title}
        <span> by </span>
        {author}
      </span>
      <span>
        Category:
        {category}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(removeBook(item_id));
        }}
      >
        Remove
      </button>
    </li>
  );
}

export default Book;
