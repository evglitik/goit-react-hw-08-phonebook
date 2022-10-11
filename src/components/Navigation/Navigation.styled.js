import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  border-bottom: 1px black solid;
  box-shadow: 4px 7px 10px -7px rgb(0 0 0 / 41%);
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: antiquewhite;
  font-weight: 500;

  &.active {
    color: red;
  }
`;
