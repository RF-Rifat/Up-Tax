import { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading/Loading";
import useGetData from "../hooks/useGetData";

const AdminRoute = ({ children }) => {
  // const { user, isLoading } = useContext(AdminContext);
  const [adminData,isLoading] = useGetData('/collection/users')

  if (isLoading) {
    return <Loading></Loading>;
  } 
  if (adminData) {
    return children
  }
  <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
