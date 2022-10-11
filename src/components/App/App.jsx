// import { ContactForm } from '../ContactForm/ContactForm';
// import { ContactList } from '../ContactList/ContactList';
// import { Filter } from '../Filter/Filter';
// import { Box } from 'Box';
// import { useDispatch, useSelector } from 'react-redux';
// import { GlobalStyle } from 'components/GlobalStyle';
// import { TitleApp, TitleContacts } from './App.styled';
// import { fetchContacts } from 'redux/operations';
// import { useEffect } from 'react';
// import { Loader } from 'components/Loader/Loader';
// import { selectLoaderStatus } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="*" element={<div>HOMEPAGE</div>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
