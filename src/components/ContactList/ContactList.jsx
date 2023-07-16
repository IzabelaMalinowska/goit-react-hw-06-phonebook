import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={`${css.contactList} ${css.wraperContactList}`}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactListItem}>
          {contact.name}: {contact.number}
          <button
            type="button"
            className={css.contactListItemBtn}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};
