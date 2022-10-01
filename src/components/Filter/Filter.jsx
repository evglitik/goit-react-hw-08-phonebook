import { FilterLable } from './Filter.styled';
import { FormInput } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { findContact } from 'redux/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = e => {
    const target = e.currentTarget;
    dispatch(findContact(target.value));
  };

  return (
    <FilterLable>
      Find contacts by name
      <FormInput type="text" onChange={e => handleFilter(e)} />
    </FilterLable>
  );
};
