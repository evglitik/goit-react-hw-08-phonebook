import { ContactItems, ContactText } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItems>
      <ContactText>{name}: </ContactText>
      <ContactText>{number}</ContactText>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ContactItems>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
