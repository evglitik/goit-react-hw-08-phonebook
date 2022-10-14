import { Header, Link } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectLoggIn } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLoaggIn = useSelector(selectLoggIn);

  return (
    <Header>
      {!isLoaggIn ? (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">log In</Link>
        </>
      ) : (
        <>
          <Link to="/contacts">Contacts</Link>
          <UserMenu />
        </>
      )}
    </Header>
  );
};

export default Navigation;
