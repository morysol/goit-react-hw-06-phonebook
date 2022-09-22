import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/store';
//
import { BtnDelete } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      {name}: {number}
      <BtnDelete
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
        }}
      >
        delete
      </BtnDelete>
    </li>
  );
};
