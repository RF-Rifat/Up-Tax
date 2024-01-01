import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading/Loading";
import useGetData from "../hooks/useGetData";
import { AuthProvider } from "../provider/Provider";
import { AdminDataContext } from "../pages/Admin/AdminProvider";

const AdminRoute = ({ children }) => {
  const { isAdmin, isSuperAdmin } = useContext(AdminDataContext);

  console.log(isAdmin, isSuperAdmin);
  if (!isSuperAdmin) {
    if (!isAdmin) {
      return <Navigate to="/"></Navigate>;
    }
  }
  if (isSuperAdmin) {
    return children;
  } else if (isAdmin) {
    return children;
  }
  <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
