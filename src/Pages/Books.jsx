import React from 'react';
import Booklist from '../Components/BookList';
import AddBookForm from '../Components/AddBookForm';

function BooksView() {
  return (
    <div>
      <Booklist />
      <AddBookForm />
    </div>
  );
}

export default BooksView;
