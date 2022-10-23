import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from '../Box';
import { MainTitle } from './App.styled';

import { FormAddContact } from '../FormAddContact/FormAddContact';
import { ContactList } from '../ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Ban' },
      { id: 2, name: 'Jon' },
    ],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;

    const contact = { id: nanoid(), name: name };
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
