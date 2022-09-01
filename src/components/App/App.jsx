import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { availableContact } from 'utils/availableContact';
import { Box } from 'Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { TitleApp, TitleContacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContscts = prevState.contacts;

    if (nextContacts !== prevContscts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = contact => {
    const availableCont = availableContact(this.state.contacts, contact);

    availableCont
      ? alert(`${availableCont} is alredy in contact`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    const { contacts, name } = this.state;

    const normalizateName = name.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizateName)
    );

    return (
      <Box p={4} as="main">
        <TitleApp>Phonebook</TitleApp>
        <ContactForm addContact={this.addContact} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter name={name} onChange={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Box>
    );
  }
}
