import {
  configureStore,
  createAction,
  createReducer,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { defaultContacts } from '../tools/defaultContacts';

// import { load } from '../tools/storage/storage';

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

// export const store = configureStore({
//   reducer: {
//     contacts,
//   },
// });

const rootReducer = combineReducers({ contacts });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistore = persistStore(store);
