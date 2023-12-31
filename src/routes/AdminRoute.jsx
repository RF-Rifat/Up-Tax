import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../pages/shared/Loading/Loading";
import useGetData from "../hooks/useGetData";
import { AuthProvider } from "../provider/Provider";
import AdminProvider, { AdminDataContext } from "../pages/Admin/AdminProvider";

const AdminRoute = ({ children }) => {
  // const { user, isLoading } = useContext(AdminContext);
  //   const [adminData, isLoading] = useGetData("/collection/users");
  //   const { user, loading } = useContext(AuthProvider);
  //   console.log(user?.email);

  //   const isEmailPresent = adminData?.some(
  //     (admin) => admin?.Email === user?.email
  //   );
  //   console.log(isEmailPresent);

  const { isAdmin } = useContext(AdminDataContext);
  console.log(isAdmin);

  console.log(isAdmin);
  if (!isAdmin) {
    return <Loading></Loading>;
  }
  if (isAdmin) {
    return children;
  }
  <Navigate to="/login"></Navigate>;
};

export default AdminRoute;
