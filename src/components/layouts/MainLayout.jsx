import Drawer from "./Drawer";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar></Navbar>
        {/* Page content here */}
        {children}
      <p className="text-center lg:ml-[300px] py-10">Copyright © 2024 - All right reserved by Active Power 55 Limited</p>
      </div>
      {/* drawer side */}
      <Drawer></Drawer>
      {/* copy right */}
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
