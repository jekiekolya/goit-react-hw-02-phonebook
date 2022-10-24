import { Title, ContactsList, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';

import { Box } from '../Box';
export const ContactList = ({ contacts }) => {
  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsList>
        {contacts.map(contact => {
          return (
            <ContactItem key={contact.id}>
              {contact.name}: {contact.number}
            </ContactItem>
          );
        })}
      </ContactsList>
    </Box>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
