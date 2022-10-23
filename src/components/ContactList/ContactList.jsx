import { Title, ContactsList, ContactItem } from './ContactList.styled';
import { Box } from '../Box';
export const ContactList = ({ contacts }) => {
  return (
    <Box>
      <Title>Contacts</Title>
      <ContactsList>
        {contacts.map(contact => {
          return <ContactItem key={contact.id}>{contact.name}</ContactItem>;
        })}
      </ContactsList>
    </Box>
  );
};
