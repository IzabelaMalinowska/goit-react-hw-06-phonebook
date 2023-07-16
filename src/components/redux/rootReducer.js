import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;

// components/selectors.js
export const getContacts = state => {
  return state.contacts;
};

export const getFilter = state => {
  return state.filter;
};
