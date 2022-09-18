import {
  configureStore,
  createAction,
  createReducer,
  current,
} from '@reduxjs/toolkit';

// addContact
// removeContact

export const addContact = createAction('contacts/addContact');
export const removeContact = createAction('contacts/removeContact');
const filterContact = createAction('contacts/filterContact');

const initialContacts = {
  items: [],
  filter: '',
};
const contacts = createReducer(initialContacts, {
  [addContact.type]: (state, action) => {
    console.log(' current ', current(state));
    console.log(action.payload);
    //  ...state, tasks: [...state.tasks, action.payload],

    return {
      ...state,
      items: [...state.items, action.payload],
    };

    // return {
    //   ...state,
    //   contacts: {
    //     ...state.contacts,
    //     items: [...state.items, action.payload],
    //   },
    // };

    // return { items: [...state.items, action.payload] };
    // return {
    // ...state, //  contacts {items: [],  filter: '' }
    // {...contacts,  {items: [],  filter: '' } }
    // ...state.contacts, [...state.contacts.items, action.payload]
    // };
  },

  [removeContact.type]: (state, action) =>
    contacts.filter(contact => contact.items !== action.payload),
  [filterContact.type]: (contacts, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    contacts,
  },
});

// Пусть Redux-состояние выглядит следующим образом.

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// + Создай хранилище с configureStore()
// Создай действия сохранения и удаления контакта, а также обновления фильтра. Используй функцию createAction().
// Создай редюсеры контактов и фильтра. Используй функцию createReducer() или createSlice().
// Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки react-redux.
