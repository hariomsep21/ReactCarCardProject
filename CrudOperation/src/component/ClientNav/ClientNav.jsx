import React from "react";
import style from "./ClientNav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ClientNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <a className={`navbar-brand ${style.brand_Name}`} href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav mr-auto ${style.navbar_nav}`}>
          {/* Add nav items here if needed */}
        </ul>
        <ul className={`navbar-nav ${style.navbar_right} ${style.navbar_nav}`}>
          <li className={`nav-item dropdown ${style.nav_item}`}>
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button className={`btn btn-primary ${style.btn}`}>User</button>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Profile Details
              </a>
              <a className="dropdown-item" href="#">
                Log Out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ClientNav;
