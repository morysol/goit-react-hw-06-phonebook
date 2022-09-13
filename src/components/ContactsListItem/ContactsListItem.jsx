import PropTypes from 'prop-types';
//
import { BtnDelete } from './ContactsListItem.styled';

export const ContactsListItem = props => {
  return (
    <li key={props.id}>
      {props.name}: {props.number}
      <BtnDelete
        type="button"
        onClick={() => {
          props.removeContact(props.id);
        }}
      >
        delete
      </BtnDelete>
    </li>
  );
};

ContactsListItem.propTypes = {
  removeContact: PropTypes.func.isRequired,
};
