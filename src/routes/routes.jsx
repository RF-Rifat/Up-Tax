//testing
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Admin/Login";
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
import SignUp from "../pages/Admin/SignUp";

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
          <PrivateRoute>
            <Setting></Setting>
          </PrivateRoute>
        ),
      },
      {
        path: "/village",
        element: (
          <PrivateRoute>
            <Village></Village>
          </PrivateRoute>
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
          <PrivateRoute>
            <Operator></Operator>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-admin/:id",
        element: (
          <PrivateRoute>
            <EditAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-admin",
        element: (
          <PrivateRoute>
            <AddAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-village/:id",
        element: (
          <PrivateRoute>
            <EditVillage></EditVillage>
          </PrivateRoute>
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
          <PrivateRoute>
            <UpdateTax />
          </PrivateRoute>
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
          <PrivateRoute>
            {" "}
            <HouseholdUpdate></HouseholdUpdate>
          </PrivateRoute>
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
          <PrivateRoute>
            <NewVillage></NewVillage>
          </PrivateRoute>
        ),
      },
      {
        path: "/businessUpdate/:id",
        element: <BusinessUpdate></BusinessUpdate>,
      },
      {
        path: "/tax",
        element: <TaxPage></TaxPage>,
      },
      {
        path: "/tax-payer/:id",
        element: <TaxPayerDetails></TaxPayerDetails>,
      },
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
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  }
]);
export default routes;
