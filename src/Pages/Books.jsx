import React from 'react';
import Booklist from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

function BooksView() {
  // return booklist and addbookform
  return (
    <div>
      <Booklist />
      <AddBookForm />
    </div>
  );
}

export default BooksView;
