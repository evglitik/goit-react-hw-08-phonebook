import { Box } from 'Box';
import { TitleApp } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { TitleContacts } from 'components/App/App.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactList } from 'components/ContactList/ContactList';
import { GlobalStyle } from 'components/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { selectLoaderStatus } from 'redux/selectors';

export const Contacts = () => {

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
