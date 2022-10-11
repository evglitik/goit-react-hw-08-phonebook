import { Header, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <Header>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">log In</Link>
    </Header>
  );
};

export default Navigation;
