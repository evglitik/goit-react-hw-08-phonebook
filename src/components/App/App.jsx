import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { TitleApp, TitleContacts } from './App.styled';

export const App = () => {
  return (
    <Box p={4} as="main">
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Box>
  );
};
