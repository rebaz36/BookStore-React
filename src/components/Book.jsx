import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>
        {title}
        <span> by </span>
        {author}
      </span>
      <button
        type="button"
        onClick={() => {
          dispatch(
            removeBook({
              title,
              author,
              id,
            })
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
  id: PropTypes.string.isRequired,
};

export default Book;
