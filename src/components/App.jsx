import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import Filter  from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { setFilter } from './redux/filterSlice';
import { addContact, deleteContact } from './redux/contactsSlice';
import { getContacts, getFilter } from './redux/selectors';
import { setContacts } from './redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const [firstRenderFlag, setFirstRenderFlag] = useState(true);

  useEffect(() => {
    const contactsFromLocalStorage = localStorage.getItem('contactList');
    if (contactsFromLocalStorage) {
      dispatch(setContacts(JSON.parse(contactsFromLocalStorage)));
    }
    setFirstRenderFlag(false);
  }, [dispatch]);

  useEffect(() => {
    if (!firstRenderFlag) {
      localStorage.setItem('contactList', JSON.stringify(contacts));
    }
  }, [contacts, firstRenderFlag]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: `id-${Date.now()}`, name, number }));
    }
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter =
      typeof filter === 'string' ? filter.toLowerCase() : '';
    return contacts.filter(contact => {
      return (
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    });
  };

  return (
    <div className="app-container">
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2 style={{ textAlign: 'center' }}>Contacts</h2>
      <Filter value={filter} handleChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
