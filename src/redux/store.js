import {
  configureStore,
  createAction,
  createReducer,
  current,
} from '@reduxjs/toolkit';

import { load } from '../tools/storage/storage';
import { defaulContacts } from '../tools/defaultContacts';

// addContact
// removeContact

const localStorageContacts = load('contacts');

//  =   localStorageContacts || defaulContacts

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
const filterContact = createAction('contacts/filterContact');

const initialContacts = {
  items: localStorageContacts || defaulContacts,
  filter: '',
};
const contacts = createReducer(initialContacts, {
  //
  [addContact.type]: (state, action) => {
    // console.log(' current ', current(state));
    // console.log('add  ', action.payload);

    return {
      ...state,
      items: [...state.items, action.payload],
    };
  },

  [removeContact.type]: (state, action) => {
    // console.log(' current ', current(state));
    // console.log('remove', action.payload);
    current(state).items.map(item => console.log(item.id === action.payload));
    // const items = current(state.items).filter(
    //   item => item.id !== action.payload
    // );
    // console.log(items);
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.payload),
    };
  },
  //   contacts.filter(contact => contact.items !== action.payload),
  // [filterContact.type]: (contacts, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
});

// + Создай хранилище с configureStore()
// Создай действия сохранения и удаления контакта, а также обновления фильтра. Используй функцию createAction().
// Создай редюсеры контактов и фильтра. Используй функцию createReducer() или createSlice().
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux.
