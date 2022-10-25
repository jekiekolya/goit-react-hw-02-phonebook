import { ContactsList, ContactItem } from './ContactList.styled';
import PropTypes from 'prop-types';

import Button from '../Button';

import { Box } from '../Box';

const ContactList = ({ contacts, filterValue, onDeleteContact }) => {
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
                <p>
                  {contact.name}: {contact.number}
                </p>
                <Button
                  type="button"
                  name="Delete"
                  onClick={() => onDeleteContact(contact.id)}
                />
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
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
