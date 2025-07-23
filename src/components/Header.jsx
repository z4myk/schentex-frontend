import React from 'react';

import passbox from '../assets/Passbox.webp'
import passbox2 from '../assets/Passbox2.webp'
import puertas from '../assets/Puertas.webp'

export const Header = () => {
    return (
        <header className="text-light text-center pb-3   ">
        <div id="carouselExampleIndicators" className="carousel slide position-relative">
  {/* Indicadores */}
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  {/* Texto centrado en todas las imágenes */}
  <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center position-absolute top-50 start-50 translate-middle z-3">
    <h1 className="text-light">Sistemas de enclavamiento de esclusas</h1>
    <p className="text-white">
      Garantizando la seguridad y eficiencia <br />
      en el acceso de <b>áreas clasificadas</b>
    </p>
    <a className="text-decoration-none" href="#caracteristicas">
    <button className="btn btn-success px-5 pt-2 pb-2 d-inline-flex align-items-center gap-2">
      Ver Más

    </button>
    </a>
  </div>

  {/* Slides */}
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={passbox} className="d-block w-100 carousel-image" alt="Passbox" />
    </div>
    <div className="carousel-item">
      <img src={puertas} className="d-block w-100 carousel-image" alt="Puertas" />
    </div>
    <div className="carousel-item">
      <img src={passbox2} className="d-block w-100 carousel-image" alt="Passbox" />
    </div>
  </div>

  {/* Controles */}
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            <div className="row p-5">

               

            </div>

            
        </header>
    );
};
