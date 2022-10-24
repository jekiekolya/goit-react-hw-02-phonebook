import { ContactsList, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';

import { Box } from '../Box';

export const ContactList = ({ contacts, filterValue }) => {
  return (
    <Box>
      <ContactsList>
        {contacts
          .filter(item => {
            return item.name.toLocaleLowerCase().includes(filterValue);
          })
          .map(contact => {
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
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default ContactList;
