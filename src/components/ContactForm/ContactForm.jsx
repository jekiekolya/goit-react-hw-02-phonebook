import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputField from '../InputField';

import { Form, ButtonAddContact } from './ContactForm.styled';

class FormAddContact extends Component {
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
        <InputField
          nameLabel="Name"
          type="text"
          name="name"
          placeholder="Jekie"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <InputField
          nameLabel="Number"
          type="tel"
          name="number"
          placeholder="777-77-77"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ButtonAddContact type="submit" onClick={this.handleClickAddContact}>
          Add contact
        </ButtonAddContact>
      </Form>
    );
  }
}

FormAddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormAddContact;
