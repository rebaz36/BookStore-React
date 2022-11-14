import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Books/BooksAPI';
import './AddBookForm.css';

function AddBookForm() {
  const titleRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();

  const dispatch = useDispatch();

  function postBook(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const author = authorRef.current.value;
    const category = categoryRef.current.value;
    const book = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(book));
    titleRef.current.value = '';
    authorRef.current.value = '';
    categoryRef.current.value = 'Category';
  }

  return (
    <div className="addBookForm">
      <h2>Add a book</h2>
      <form className="d-flex" onSubmit={postBook}>
        <input
          placeholder="Book Title"
          type="text"
          name="title"
          ref={titleRef}
          required
        />
        <input
          placeholder="Author Name"
          type="text"
          name="author"
          ref={authorRef}
          required
        />
        <select
          className="categoryInput"
          name="list"
          ref={categoryRef}
          required
        >
          <option defaultValue="">Category</option>
          <option value="Historical">Historical</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBookForm;
