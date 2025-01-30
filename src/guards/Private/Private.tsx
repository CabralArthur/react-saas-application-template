import { useLocation, Navigate, Outlet } from "react-router-dom";

import useIsLogged from "@/hooks/useIsLogged";

export default function PrivateRouteGuard() {
  const isLogged = useIsLogged();
  const { pathname } = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  if (pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};
