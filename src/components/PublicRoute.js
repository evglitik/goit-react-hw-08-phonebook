import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggIn } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

export const PublicRoute = ({
  component: Component,
  redirectTo,
}) => {
    const isLoggIn = useSelector(selectLoggIn);

  return !isLoggIn ? Component : <Navigate to={redirectTo} />;
};

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};