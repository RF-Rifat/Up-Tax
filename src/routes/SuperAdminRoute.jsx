import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading/Loading";
import useGetData from "../hooks/useGetData";
import { AuthProvider } from "../provider/Provider";
import AdminProvider, { AdminDataContext } from "../pages/Admin/AdminProvider";

const SuperAdminRoute = ({ children }) => {
  const { isSuperAdmin } = useContext(AdminDataContext);

  console.log(isSuperAdmin);
  if (!isSuperAdmin) {
    return <Navigate to="/"></Navigate>;
  }
  if (isSuperAdmin) {
    return children;
  }
  <Navigate to="/login"></Navigate>;
};

export default SuperAdminRoute;
