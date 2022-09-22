import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

// import { current } from '@reduxjs/toolkit';

import { load } from '../tools/storage/storage';
import { defaulContacts } from '../tools/defaultContacts';

const localStorageContacts = load('contacts');

//  =   localStorageContacts || defaulContacts

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
export const updateFilter = createAction('filter/updateFilter');

const initialContacts = {
  items: localStorageContacts || defaulContacts,
  filter: '',
};
const contacts = createReducer(initialContacts, {
  //
  [addContact]: (state, action) => {
    // console.log(' current ', current(state));
    // console.log('addContact  ', action.payload);

    return {
      ...state,
      items: [...state.items, action.payload],
    };
  },

  [removeContact]: (state, action) => {
    // console.log(' current ', current(state));
    // console.log('removeContact', action.payload);
    // current(state).items.map(item => console.log(item.id === action.payload));
    // const items = current(state.items).filter(
    //   item => item.id !== action.payload
    // );
    // console.log(items);
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.payload),
    };
  },
  [updateFilter]: (state, action) => {
    // return {
    //   ...state,
    //   filter: action.payload,
    // };
    // console.log(action.payload);
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
