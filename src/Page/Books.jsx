import React from 'react';
import Booklist from '../Component/BookList';
import AddBookForm from '../Component/AddBookForm';

function BooksView() {
  return (
    <div>
      <Booklist />
      <AddBookForm />
    </div>
  );
}

export default BooksView;
