import React from "react";
import logo from '../../assets/logo.webp'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>

    
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
            <Link to="/" className="text-decoration-none">
            <a className="nav-link  mx-5 efectoLista navbarButtons" aria-current="page" href="#">
              <b>Inicio</b>
            </a>
            </Link>
            <Link to="/enclavamientos" className="text-decoration-none">
            <a className="nav-link" href="#">
              
            </a>
            </Link>
            <li class="nav-item dropdown">
          <a class="nav-link  efectoLista" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <b>Enclavamientos</b><i class="fi fi-br-caret-down text-success"></i>
          </a>
          <ul class="dropdown-menu">
            <Link to="/enclavamientos/personalizacion" className="text-decoration-none">
            <li><a class="dropdown-item p-3" href="#"><b>Personalización</b></a></li>
            </Link>
            <li><hr class="dropdown-divider" /></li>
            <Link to="/enclavamientos/adaptabilidad" className="text-decoration-none">
            <li><a class="dropdown-item p-3" href="#"><b>Adaptabilidad</b></a></li>
            </Link>
            <li><hr class="dropdown-divider" /></li>
            <Link to="/enclavamientos/senalizacion" className="text-decoration-none">
            <li><a class="dropdown-item p-3" href="#"><b>Señalización</b></a></li>
            </Link>
            <li><hr class="dropdown-divider" /></li>
            <Link to="/enclavamientos/instalacion" className="text-decoration-none">
            <li><a class="dropdown-item p-3" href="#"><b>Instalación</b></a></li>
            </Link>
          </ul>
        </li>
            <a className="nav-link mx-5 efectoLista" href="#contact">
              <b>Contacto</b>
            </a>
           
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};
