import React, { Component } from 'react';
import {
  Form,
  Label,
  Input,
  NameLabel,
  ButtonAddContact,
} from './FormAddContact.styled';

export class FormAddContact extends Component {
  handleClickAddContact = e => {
    e.target.classList.add('click');
    setTimeout(() => {
      e.target.classList.remove('click');
    }, 100);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          <NameLabel>Name</NameLabel>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <ButtonAddContact type="submit" onClick={this.handleClickAddContact}>
          Add contact
        </ButtonAddContact>
      </Form>
    );
  }
}
