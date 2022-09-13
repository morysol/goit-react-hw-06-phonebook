import PropTypes from 'prop-types';
//
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

export const ContactsList = ({ filteredContacts, removeContact }) => {
  if (filteredContacts.length > 0) {
    return (
      <div>
        <ul>
          {filteredContacts.map(contact => (
            <ContactsListItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              removeContact={removeContact}
            />
          ))}
        </ul>
      </div>
    );
  }
};

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
};
