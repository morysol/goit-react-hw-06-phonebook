import { useSelector, useDispatch } from 'react-redux';
//
import { ContactsList } from './ContactsList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { updateFilter } from '../redux/store';
//
import { addContact } from '../redux/store';

import { Container } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

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

    dispatch(addContact({ id: name, name, number }));
  };
  const onFilterChange = e => {
    dispatch(updateFilter(e.target.value));
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
      <ContactsList></ContactsList>
    </Container>
  );
};

export default App;
