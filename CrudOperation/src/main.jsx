import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Regis from "./component/Registration/Regis.jsx";
import CreatRegis from "./component/Registration/CreatRegis.jsx";
import ViewRegis from "./component/Registration/ViewRegis.jsx";
import EditRegis from "./component/Registration/EditRegis.jsx";
import Nav from "./component/NavBar/Nav.jsx";
import ClientNav from "./component/ClientNav/ClientNav.jsx";
import CarCard from "./component/CarCard/CarCard.jsx";
import ShowCarCard from "./component/CarCard/ShowCarCard/ShowCarCard.jsx";
import CarCardDetails from "./component/CarCard/CarCardDetails/CarCardDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/clientnav", element: <ClientNav /> },
      { path: "/adminReg", element: <Regis /> },
      { path: "/creatreg", element: <CreatRegis /> },
      { path: "/viewreg", element: <ViewRegis /> },
      { path: "/editreg/:id", element: <EditRegis /> },
      { path: "/clientnav", element: <ClientNav /> },
      { path: "/showcarcard", element: <ShowCarCard /> },
      { path: "/carcarddetails", element: <CarCardDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
