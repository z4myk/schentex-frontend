import React from "react";
import logo from '../../assets/logo.webp'
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" />
        </a>

        {/* botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto mx-5">
            {/*             ↑↑↑        */}
            <a className="nav-link active mx-5" aria-current="page" href="#">
              inicio
            </a>
            <a className="nav-link  x-5" href="#">
              Enclavamientos
            </a>
            <a className="nav-link mx-5" href="#">
              Contacto
            </a>
           
          </div>
        </div>
      </div>
    </nav>
  );
};
