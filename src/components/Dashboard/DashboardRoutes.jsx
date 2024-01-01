import { NavLink } from "react-router-dom";
import dashboard from "../../../public/icons/dashboard.png";
import setting from "../../../public/icons/setting.png";
import village from "../../../public/icons/village.png";
import household from "../../../public/icons/househld.png";
import tax from "../../../public/icons/tax.png";
import business from "../../../public/icons/business.png";
import user from "../../../public/icons/user.png";
import { useContext } from "react";
import { AdminDataContext } from "../../pages/Admin/AdminProvider";
import filterData from "../../utils/filterData";
import { BsSendCheckFill } from "react-icons/bs";

let data = [
  { to: "/", icon: dashboard, text: "ড্যাশবোর্ড" },
  { to: "/setting", icon: setting, text: "সেটিংস" },
  { to: "/village", icon: village, text: "গ্রাম" },
  { to: "/household", icon: household, text: "গৃহস্থ" },
  { to: "/business", icon: business, text: "ব্যবসা" },

  { to: "/tax", icon: tax, text: "কর আদায়" },

  { to: "/operator", icon: user, text: "অপারেটর" },
  { to: "/signUp", icon: user, text: "রেজিস্ট্রেশন" },
];

const DashboardRoutes = () => {
  const { isSuperAdmin } = useContext(AdminDataContext);

  const filteredData = isSuperAdmin
    ? data
    : data.filter(
        (item) =>
          item.to !== "/setting" &&
          item.to !== "/operator" &&
          item.to !== "/village" &&
          item.to !== "/signUp"
      );

  return (
    <ul className="sticky top-0 z-50 bg-white">
      <header className="flex-none flex h-16 border-t  items-center">
        <h1 id="page-caption" className="font-semibold mx-2 text-4xl px-4 py-6">
          <a
            href="mailto:uphtax55@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <BsSendCheckFill /> Mail
          </a>
        </h1>
      </header>
      {filteredData.map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
            };
          }}
        >
          <article
            tabIndex={0}
            className="cursor-pointer items-center rounded-md p-3 bg-[#ffffff] flex text-gray-700 mb-2 hover:border-l-green-400 hover:border-2 border-2 border-transparent mx-2 focus:outline-none hover:bg-[#3498db] hover:text-white transition-all"
          >
            <span className="flex-none pt-1 pr-2">
              <img
                className="rounded-md w-5 md:w-7"
                src={item.icon}
                alt={item.text}
              />
            </span>
            <div className="flex-1">{item.text}</div>
          </article>
        </NavLink>
      ))}
    </ul>
  );
};

export default DashboardRoutes;
