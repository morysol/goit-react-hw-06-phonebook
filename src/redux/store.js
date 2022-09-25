import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// import { load } from '../tools/storage/storage';
import { defaultContacts } from '../tools/defaultContacts';

// const localStorageContacts = load('contacts');

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const updateFilter = createAction('filter/updateFilter');

const initialContacts = {
  // items: localStorageContacts || defaulContacts,
  items: defaultContacts,
  filter: '',
};
const contacts = createReducer(initialContacts, {
  //
  [addContact]: (state, action) => {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  },

  [removeContact]: (state, action) => {
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.payload),
    };
  },
  [updateFilter]: (state, action) => {
    state.filter = action.payload;
  },
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
