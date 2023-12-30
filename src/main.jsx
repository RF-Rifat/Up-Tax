import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Toaster } from "react-hot-toast";
import Provider from "./provider/Provider.jsx";
import { HelmetProvider } from "react-helmet-async";
// check git branch

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
        </Provider>
        </HelmetProvider>
    </React.StrictMode>
  
);
