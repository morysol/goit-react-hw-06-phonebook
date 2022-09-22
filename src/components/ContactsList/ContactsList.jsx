import { useSelector } from 'react-redux';
//
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  //

  const contactsToShow = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contactsToShow.length > 0) {
    return (
      <ul>
        {contactsToShow.map(contact => (
          <ContactsListItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    );
  }
};
