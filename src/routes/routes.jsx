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
import AdminRoute from "./AdminRoute";

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
          <AdminRoute>
            <Setting></Setting>
          </AdminRoute>
        ),
      },
      {
        path: "/village",
        element: (
          <AdminRoute>
            <Village></Village>
          </AdminRoute>
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
          <AdminRoute>
            <Operator></Operator>
          </AdminRoute>
        ),
      },
      {
        path: "/edit-admin/:id",
        element: (
          <AdminRoute>
            <EditAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/add-admin",
        element: (
          <AdminRoute>
            <AddAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/edit-village/:id",
        element: (
          <AdminRoute>
            <EditVillage></EditVillage>
          </AdminRoute>
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
          <AdminRoute>
            <UpdateTax />
          </AdminRoute>
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
          <AdminRoute>
            {" "}
            <HouseholdUpdate></HouseholdUpdate>
          </AdminRoute>
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
          <AdminRoute>
            <NewVillage></NewVillage>
          </AdminRoute>
        ),
      },
      {
        path: "/businessUpdate/:id",
        element: (
          <AdminRoute>
            <BusinessUpdate></BusinessUpdate>
          </AdminRoute>
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
          <AdminRoute>
            <SignUp></SignUp>
          </AdminRoute>
        ),
      },
      // {
      //   path: "/operator",
      //   element: (
      //     <AdminRoute>
      //       <Operator></Operator>
      //     </AdminRoute>
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
