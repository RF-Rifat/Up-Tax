import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../provider/Provider";
import Spinner from "../pages/shared/Spinner"; 

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthProvider);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (!user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
