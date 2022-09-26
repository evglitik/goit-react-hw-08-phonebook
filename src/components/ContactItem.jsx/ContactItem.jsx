import {
  ContactItems,
  ContactText,
  ContactNumber,
  ContactButtonDelet,
} from './ContactItem.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItems>
      <ContactText>{name} </ContactText>
      <ContactNumber>{number}</ContactNumber>
      <ContactButtonDelet
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        X
      </ContactButtonDelet>
    </ContactItems>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
