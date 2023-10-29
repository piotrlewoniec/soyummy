import React, { useEffect } from 'react';
import s from './mainCategories.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/categories/actions';
import { v4 as uuidv4 } from 'uuid';

export const MainCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const { title, thumb, description } = categories;

  return (
    <div className={s.margin}>
      {' '}
      {categories.map(category => (
        <h2 key={uuidv4()}>{category.title}</h2>
      ))}
    </div>
  );
};
