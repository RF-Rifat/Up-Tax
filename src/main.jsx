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
<<<<<<< HEAD
  <React.StrictMode>
=======
  
    <React.StrictMode>
>>>>>>> c9cf34d39524efb52faee70a5bc56c7c83145f17
    <HelmetProvider>
      <Provider>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster />
<<<<<<< HEAD
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
=======
        </Provider>
        </HelmetProvider>
    </React.StrictMode>
  
>>>>>>> c9cf34d39524efb52faee70a5bc56c7c83145f17
);
