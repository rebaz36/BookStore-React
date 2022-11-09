import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return categories.map((category) => (
    <li key={category.item_id}>{category.category}</li>
  ));
}

export default Categories;
