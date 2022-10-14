import { useState } from 'react';
import { availableContact } from 'utils/availableContact';
import {
  FormContact,
  FormLable,
  FormInput,
  FormSubmitButton,
} from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionContainer } from 'components/Navigation/Navigation.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (availableContact(contacts, name)) {
      alert(`${name} is alredy in contact`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <AccordionContainer>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Add Contact</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormContact onSubmit={handleSubmit}>
          <FormLable>
            Name
            <FormInput
              label="Name"
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
            Number
            <FormInput
              label="Number"
              type="tel"
              name="phone"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={e => setNumber(e.target.value)}
            />
          </FormLable>
          <FormSubmitButton type="submit">+</FormSubmitButton>
        </FormContact>
      </AccordionDetails>
    </AccordionContainer>
  );
};
