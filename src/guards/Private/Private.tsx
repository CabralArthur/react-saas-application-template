import useIsLogged from "@/hooks/useIsLogged";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouteGuard() {
  const isLogged = useIsLogged();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
