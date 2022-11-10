import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getCategories from '../Redux/Categories/CategoriesAPI';
import './Categories.css';

function Categories() {
  const books = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return books.map((book) => <li key={book.item_id}>{book.category}</li>);
}

export default Categories;
