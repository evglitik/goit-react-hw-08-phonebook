import { FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/contacts/contactsSlice';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionContainer } from 'components/Navigation/Navigation.styled';


export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const target = e.currentTarget;
    dispatch(findContact(target.value));
  };

  return (
    <AccordionContainer>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Find contacts by name</Typography>
      </AccordionSummary>
      <AccordionDetails>

          <FormInput type="text" onChange={e => handleFilter(e)} />

      </AccordionDetails>
    </AccordionContainer>
  );
};
