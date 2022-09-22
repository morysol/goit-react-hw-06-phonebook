import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/store';
//
import { BtnDelete } from './ContactsListItem.styled';

const handleDelete = (props, dispatch) => {
  //
  props.removeContact(props.id);
  //
  dispatch(contactsActions.removeContact(props.id));
};

export const ContactsListItem = props => {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);

  return (
    <li key={props.id}>
      {props.name}: {props.number}
      <BtnDelete
        type="button"
        onClick={() => {
          handleDelete(props, dispatch);
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
