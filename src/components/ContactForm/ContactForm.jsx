import { useState } from 'react';
import { availableContact } from 'utils/availableContact';
import {
  FormContact,
  FormLable,
  FormInput,
  FormSubmitButton,
} from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (availableContact(contacts, name)) {
      alert(`${name} is alredy in contact`);
      return;
    }

    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <FormContact onSubmit={handleSubmit}>
        <FormLable style={{ display: 'flex' }}>
          Name{' '}
          <FormInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
          />
        </FormLable>
        <FormLable>
          Number{' '}
          <FormInput
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setNumber(e.target.value)}
          />
        </FormLable>
        <FormSubmitButton type="submit">+</FormSubmitButton>
      </FormContact>
    </div>
  );
};
