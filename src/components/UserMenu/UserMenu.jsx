import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { useSelector } from 'react-redux';
import { selectEmail } from 'redux/auth/selectors';
import { UserMenuContainer } from './UserMenu.styled';
import { ButtonAuthOut } from 'components/Navigation/Navigation.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const emailUser = useSelector(selectEmail);

  const handleClick = () => {
    dispatch(logOut())
  };

  return (
    <UserMenuContainer>
      <p>{emailUser}</p>
      <ButtonAuthOut
        variant="outlined"
        color="secondary"
        type="button"
        size="small"
        onClick={handleClick}
      >
        Logout
      </ButtonAuthOut>
    </UserMenuContainer>
  );
};
