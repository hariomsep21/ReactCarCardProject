import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./component/NavBar/Nav.jsx";
import { Outlet } from "react-router-dom";
import ClientNav from "./component/ClientNav/ClientNav.jsx";
import CarCard from "./component/CarCard/CarCard.jsx";

function App() {
  return (
    <>
      <ClientNav />
      <CarCard />
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
