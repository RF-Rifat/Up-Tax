import { useContext } from "react";
import Dashboard from "../../pages/Dashboard/Dashboard";
import DashboardRoutes from "../Dashboard/DashboardRoutes";
import { AuthProvider } from "../../provider/Provider";

const Drawer = () => {
  const user = useContext(AuthProvider);
  const { email, photoURL, displayName } = user.user;
  // Checking the merge command work or not
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-[white]">
        <div className="flex items-center mb-4">
          <img
            src="https://laxmipurup.uptaxs.com/public//upload/profiles/6Lj22iGX8Y-1648323906.png"
            alt="Profile"
            className="w-14 h-14 rounded-full mr-2"
          />
          <div>
            <p className="text-base font-medium text-gray-700">{displayName}</p>
            <p className="text-base text-gray-500">{email}</p>
          </div>
        </div>

        <DashboardRoutes />
      </ul>
    </div>
  );
};

export default Drawer;
