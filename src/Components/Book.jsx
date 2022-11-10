/* eslint-disable react/self-closing-comp */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../Redux/Books/BooksAPI';

import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

function Book({ BOOK }) {
  const {
    title,
    author,
    item_id,
    category
  } = BOOK;

  const dispatch = useDispatch();

  const [percentage, setPercentage] = useState(0);
  const changeProgress = () => {
    if (percentage < 100) {
      setPercentage(percentage + 1);
    }

    if (percentage === 100) {
      dispatch(removeBook(item_id));
    }
  };

  return (
    <div className="bookContainer">
      <div className="d-flex-col">
        <span className="bookCategory">{category}</span>
        <h2 className="bookTitle">{title}</h2>
        <span className="bookAuthor">{author}</span>
        <div className="bottomLinks d-flex">
          <button className="bookRemoveButton" type="button">
            Comments
          </button>
          <div className="Line-2"></div>
          <button
            className="bookRemoveButton"
            type="button"
            onClick={() => {
              dispatch(removeBook(item_id));
            }}
          >
            Remove
          </button>
          <div className="Line-2"></div>
          <button className="bookRemoveButton" type="button">
            Comments
          </button>
        </div>
      </div>
      <div> </div>
      <div className="completedness">
        <div className="bar">
          <CircularProgressbar value={percentage} />
          <div className="barinfo">
            <div>
              {percentage}
              %
            </div>
            <div className="percentCompleted">Completed</div>
          </div>
        </div>
        <div className="Line-3"></div>
        <div className="progress d-flex-col">
          <span>CURRENT CHAPTER</span>
          <span>Chapter 17</span>
          <button
            className="updateProgressButton"
            type="button"
            onClick={changeProgress}
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
}

Book.defaultProps = {
  BOOK: {
    title: '',
    author: '',
    item_id: '',
    category: '',
  },
};

Book.propTypes = {
  BOOK: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
    category: PropTypes.string.isRequired,
  }),
};

export default Book;
