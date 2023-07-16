import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { getFilter } from '../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleInputChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      <label className={css.filterLabel}>
        Filter contacts by name:
        <input
          className={css.filterName}
          type="text"
          value={filter}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default Filter;