import React, { Component } from 'react';
import { Box } from '../Box';
import { MainTitle } from './App.styled';

import { FormAddContact } from '../FormAddContact/FormAddContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Ban' },
      { id: 2, name: 'Jon' },
    ],
    name: '',
  };

  render() {
    return (
      <Box bg="mainBg" color="text">
        <MainTitle>Phonebook</MainTitle>
        <FormAddContact />
      </Box>
    );
  }
}
