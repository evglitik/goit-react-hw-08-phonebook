import { Box } from 'Box';
import { ContactItem } from 'components/ContactItem.jsx/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectStatusFilter } from 'redux/contacts/selectors';
import { getVisibleContacts } from 'utils/getVisabylityContacts';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const statusFilter = useSelector(selectStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <Box as="ul" p={0} mt={4} mb={4}>
      {visibleContacts.map(el => {
        const { id, name, number } = el;
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </Box>
  );
};
