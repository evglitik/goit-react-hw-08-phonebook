import {
  ContactItems,
  ContactText,
  ContactNumber,
  ContactItemContainerText,
} from './ContactItem.styled';
import { ContactButtonDelet } from 'components/Navigation/Navigation.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItems>
      <ContactItemContainerText>
        <ContactText>{name} </ContactText>
        <ContactNumber>{number}</ContactNumber>
      </ContactItemContainerText>

      <ContactButtonDelet
        aria-label="delete"
        size="large"
        onClick={() => dispatch(deleteContact(id))}
      >
        <DeleteIcon fontSize="inherit" />
      </ContactButtonDelet>
    </ContactItems>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
