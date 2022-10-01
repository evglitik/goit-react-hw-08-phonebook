import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Box } from 'Box';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyle';
import { TitleApp, TitleContacts } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { selectLoaderStatus } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoaderStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={4} as="main">
      <TitleApp>Phonebook</TitleApp>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {isLoading ? <Loader /> : <ContactList />}
      <GlobalStyle />
    </Box>
  );
};
