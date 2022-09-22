import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

//
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';

import { defaulContacts } from '../tools/defaultContacts';
//

//
import { load, save } from '../tools/storage/storage';
import { Container } from './App.styled';

export const App = () => {
  const localStorageContacts = load('contacts');

  const [contacts, setContacts] = useState(
    localStorageContacts || defaulContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    // console.log(contacts);
    // console.log(`!!!!!   SAVING CONTACTS !!!!!`);
    save('contacts', contacts);
  }, [contacts]);

  const isContactExists = (list, value) => {
    let state = false;
    list.forEach(item => {
      if (item.name === value) {
        state = true;
      }
    });
    return state;
  };

  const formSubmitedContacts = ({ name, number }) => {
    const ifExist = isContactExists(contacts, name);

    if (ifExist) {
      alert(` ${window.location.host} says: ${name}  is alredy in contacts.`);
      return;
    }
    // setContacts([...contacts, { id: nanoid(), name, number }]);
    setContacts([...contacts, { id: name, name, number }]);
  };
  const onFilterChange = e => {
    setFilter(e.target.value);
    // add redux
  };
  const onDeleteContact = id => {
    const newContacts = contacts.filter(contact => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmitContactForm={formSubmitedContacts}></ContactForm>
      <h2>Contacts</h2>
      <SearchFilter
        onFilterChange={onFilterChange}
        filter={filter}
      ></SearchFilter>
      <ContactsList
        filteredContacts={contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )}
        removeContact={onDeleteContact}
      ></ContactsList>
    </Container>
  );
};

export default App;
