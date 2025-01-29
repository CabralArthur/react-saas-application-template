import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router';
import useIsLogged from '../hooks/useIsLogged';

const RouteProtection = () => {
  const isLogged = useIsLogged();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RouteProtection;
