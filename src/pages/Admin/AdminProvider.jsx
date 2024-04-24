import { createContext, useContext } from "react";
import useGetData from "../../hooks/useGetData";
import { AuthProvider } from "../../provider/Provider";

export const AdminDataContext = createContext(null);

const AdminProvider = ({ children }) => {
  const [adminData, isLoading] = useGetData("/collection/users");
  const { user, loading } = useContext(AuthProvider);

  const filteredAdmin = adminData.filter((item) => item.Role === "Admin");
  const filteredSuperAdmin = adminData.filter(
    (item) => item?.Role === "Super-Admin"
  );

  const isAdmin = filteredAdmin?.some((admin) => admin?.Email === user?.email);
  const isSuperAdmin = filteredSuperAdmin?.some(
    (admin) => admin?.Email === user?.email
  );
  const adminValues = {
    isAdmin,
    isSuperAdmin,
  };
  return (
    <AdminDataContext.Provider value={adminValues}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminProvider;
