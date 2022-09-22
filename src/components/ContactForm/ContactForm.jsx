import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

//
import { save } from '../../tools/storage/storage';

import { AddButton, InputField, Form } from '../ContactForm/ContactForm.styled';

function useContacts() {
  return useSelector(state => state.contacts.items);
}

const ContactForm = ({ onSubmitContactForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputName = nanoid();
  const inputNumber = nanoid();

  const contacts = useContacts();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;

    onSubmitContactForm({
      name,
      number,
    });

    save('contacts', contacts);
    e.target.reset();
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor={inputName}>Name</label>
      <InputField
        type="text"
        id={inputName}
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />

      <label htmlFor={inputNumber}>Number</label>
      <InputField
        type="tel"
        id={inputNumber}
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
      />
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};

ContactForm.propTypes = { onSubmitContactForm: PropTypes.func.isRequired };

export default ContactForm;
