import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { MainTitle, SecondaryTitle } from './App.styled';

import { ContactForm, ContactList, Filter } from '../components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    const { name, number } = contact;
    const newContacts = [...this.state.contacts];
    newContacts.unshift({ id: nanoid(), name: name, number: number });

    this.setState(() => {
      return { contacts: newContacts };
    });

    Notify.success(`${name} successfully added`);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handlerFilterList = e => {
    const inputValue = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { filter: inputValue };
    });
  };

  render() {
    return (
      <Box bg="mainBg" color="text" padding="30px">
        <MainTitle>Phonebook</MainTitle>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter handlerFilterList={this.handlerFilterList} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
          onDeleteContact={this.deleteContact}
        />
      </Box>
    );
  }
}
