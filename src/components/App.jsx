import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    // Check input value and create notification
    const statusValidation = checkEqualValue.call(this.state.contacts, name);
    if (statusValidation === 'alert') return;

    // Add new contact
    const contact = { id: nanoid(), name: name, number: number };
    const newContacts = [...this.state.contacts];
    newContacts.unshift(contact);

    this.setState(() => {
      return { contacts: newContacts };
    });

    Notify.success(`${name} successfully added`);

    // reset values in form
    form.reset();
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
        <ContactForm handleSubmit={this.handleSubmit} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter handlerFilterList={this.handlerFilterList} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </Box>
    );
  }
}

function checkEqualValue(name) {
  const equalValue = this.filter(item => {
    return item.name === name;
  });

  if (equalValue.toString()) {
    Notify.failure(`${name} is already in contact`);
    return 'alert';
  }

  return 'ok';
}
