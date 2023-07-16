import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className={`${css.form} form`} onSubmit={handleSubmit}>
      <label className={`${css.formLabel} formLabel`}>
        Name
        <input
          className={`${css.formName} formName`}
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className={`${css.formLabel} formLabel`}>
        Number
        <input
          className={`${css.formNumber} formNumber`}
          type="text"
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={`${css.formBtn} formBtn`} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};
