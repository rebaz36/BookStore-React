import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({
  title, author, itemId, category
}) {
  const dispatch = useDispatch();

  return (
    <>
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
          dispatch(
            removeBook(itemId),
          );
        }}
      >
        Remove
      </button>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
