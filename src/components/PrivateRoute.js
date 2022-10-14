import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoggIn } from 'redux/auth/selectors';
import { selectRefresh } from 'redux/auth/selectors';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggIn = useSelector(selectLoggIn);
  const isRefresh = useSelector(selectRefresh);
  const isRedirect = !isLoggIn && !isRefresh;

  return isRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
