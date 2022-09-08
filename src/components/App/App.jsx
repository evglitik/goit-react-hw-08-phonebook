import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { availableContact } from 'utils/availableContact';
import { Box } from 'Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { TitleApp, TitleContacts } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);

    if (parsedContacts) {
      setContacts([...parsedContacts]);
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = contact => {
    const availableCont = availableContact(contacts, contact);

    availableCont
      ? alert(`${availableCont} is alredy in contact`)
      : setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    const newContacts = contacts.filter(el => el.id !== id);
    setContacts([...newContacts]);
  };

  const handleFilter = e => {
    setName(e.currentTarget.value);
  };

  const normalizateName = name.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizateName)
  );

  return (
    <Box p={4} as="main">
      <TitleApp>Phonebook</TitleApp>
      <ContactForm addContact={addContact} />

      <TitleContacts>Contacts</TitleContacts>
      <Filter name={name} onChange={handleFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      <GlobalStyle />
    </Box>
  );
};