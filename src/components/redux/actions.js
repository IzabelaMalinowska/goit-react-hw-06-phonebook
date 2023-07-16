export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_FILTER = 'SET_FILTER';

export const addContact = (name, number) => ({
  type: ADD_CONTACT,
  payload: { name, number },
});

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter,
});
