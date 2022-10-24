import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { MainTitle } from './App.styled';

import { FormAddContact } from '../FormAddContact';
import { ContactList } from '../ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const contact = { id: nanoid(), name: name, number: number };
    const newContacts = [...this.state.contacts];
    newContacts.unshift(contact);

    this.setState(() => {
      return { contacts: newContacts };
    });

    // reset values in form
    form.reset();
  };

  render() {
    return (
      <Box bg="mainBg" color="text" padding="30px">
        <MainTitle>Phonebook</MainTitle>
        <FormAddContact handleSubmit={this.handleSubmit} />
        <ContactList contacts={this.state.contacts} />
      </Box>
    );
  }
}
