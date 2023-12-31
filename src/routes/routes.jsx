//testing
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import MainDashboard from "../components/layouts/MainDashboard";
import Dashboard from "../pages/Dashboard/Dashboard";
import Setting from "../pages/Setting/Setting";
import Village from "../pages/Village/Village";
import Household from "../pages/Household/Household";
import Business from "../pages/Business/Business";
import HouseholdTax from "../pages/HouseholdTax/HouseholdTax";
import Operator from "../pages/Admin/Operator";
import EditVillage from "../pages/Village/EditVillage";
import AddHousehold from "../pages//Household/AddHousehold";
import TaxPaymentDetails from "../pages/shared/Tax-Payment/TaxPaymentDetails/TaxPaymentDetails";
import HouseholdDetails from "../pages/Household/HouseholdDetails";
import HouseholdUpdate from "../pages/Household/HouseholdUpdate";
import NewBusiness from "../pages/Business/NewBusiness";
import BusinessClientDetails from "../pages/Business/BusinessClientDetails";
import NewVillage from "../pages/Village/NewVillage";
import EditAdmin from "../pages/Admin/EditAdmin";
import AddAdmin from "../pages/Admin/AddAdmin";
import BusinessUpdate from "../pages/Business/BusinessUpdate";
import TaxPage from "../pages/Tax/TaxPage";
import TaxPayerDetails from "../pages/Tax/TaxPayerDetails";
import UpdateTax from "../pages/Tax/UpdateTax";
import PrivateRoute from "./PrivateRoute";
import ActiveRoute from "./ActiveRoute";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import SuperAdminRoute from "./SuperAdminRoute";


const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <App></App>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/setting",
        element: (
          <SuperAdminRoute>
            <Setting></Setting>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/village",
        element: (
          <SuperAdminRoute>
            <Village></Village>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/household",
        element: (
          <PrivateRoute>
            <Household></Household>
          </PrivateRoute>
        ),
      },
      {
        path: "/business",
        element: (
          <PrivateRoute>
            <Business></Business>
          </PrivateRoute>
        ),
      },
      {
        path: "/household-tax",
        element: (
          <PrivateRoute>
            <HouseholdTax></HouseholdTax>
          </PrivateRoute>
        ),
      },
      {
        path: "/operator",
        element: (
          <SuperAdminRoute>
            <Operator></Operator>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/edit-admin/:id",
        element: (
          <SuperAdminRoute>
            <EditAdmin />
          </SuperAdminRoute>
        ),
      },
      {
        path: "/add-admin",
        element: (
          <SuperAdminRoute>
            <AddAdmin />
          </SuperAdminRoute>
        ),
      },
      {
        path: "/edit-village/:id",
        element: (
          <SuperAdminRoute>
            <EditVillage></EditVillage>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/add-household",
        element: (
          <PrivateRoute>
            <AddHousehold></AddHousehold>
          </PrivateRoute>
        ),
      },
      {
        path: "/tax-payment-details",
        element: (
          <PrivateRoute>
            <TaxPaymentDetails></TaxPaymentDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-tax/:id",
        element: (
          <SuperAdminRoute>
            <UpdateTax />
          </SuperAdminRoute>
        ),
      },
      {
        path: "/household-details/:id",
        element: (
          <PrivateRoute>
            <HouseholdDetails></HouseholdDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/household-update/:id",
        element: (
          <SuperAdminRoute>
            {" "}
            <HouseholdUpdate></HouseholdUpdate>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/new-business",
        element: (
          <PrivateRoute>
            <NewBusiness></NewBusiness>
          </PrivateRoute>
        ),
      },
      {
        path: "/businessClientsDetails/:id",
        element: (
          <PrivateRoute>
            <BusinessClientDetails></BusinessClientDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "/addNew-village",
        element: (
          <SuperAdminRoute>
            <NewVillage></NewVillage>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/businessUpdate/:id",
        element: (
          <SuperAdminRoute>
            <BusinessUpdate></BusinessUpdate>
          </SuperAdminRoute>
        ),
      },
      {
        path: "/tax",
        element: <TaxPage></TaxPage>,
      },
      {
        path: "/tax-payer/:id",
        element: <TaxPayerDetails></TaxPayerDetails>,
      },
      {
        path: "/signUp",
        element: (
          <SuperAdminRoute>
            <SignUp></SignUp>
          </SuperAdminRoute>
        ),
      },
      // {
      //   path: "/operator",
      //   element: (
      //     <SuperAdminRoute>
      //       <Operator></Operator>
      //     </SuperAdminRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/login",
    element: (
      <ActiveRoute>
        <Login></Login>
      </ActiveRoute>
    ),
  },
]);
export default routes;
