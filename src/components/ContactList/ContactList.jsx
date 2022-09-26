import { Box } from 'Box';
import { ContactItem } from 'components/ContactItem.jsx/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { getVisibleContacts } from 'utils/getVisabylityContacts';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);
  const visibleContacts = getVisibleContacts(contacts, statusFilter);

  return (
    <Box as="ul" mt={4} mb={4}>
      {visibleContacts.map(el => {
        const { id, name, number } = el;
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </Box>
  );
};
