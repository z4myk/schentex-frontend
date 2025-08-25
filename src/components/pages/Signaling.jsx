import React, {useEffect} from 'react'
import semaforos from '../../assets/semaforos.webp'
import sema from '../../assets/sema.webp'
import {Link, useLocation} from 'react-router-dom'

export const Signaling = () => {

    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);


    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach((tooltipTriggerEl) => {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      }, []);




    return (
        <section className="">
            <div className="bg-light  mb-3 wrapper3" id="semaforo">
                <h1><b>Señalización</b></h1>
            </div>

            <div className="pt-5 mb-5 text-light container" >
            <h4 >¿Qué es un semaforo?</h4>
            <p>Dispositivo de señalización lumínica diseñado para indicar el estado de acceso de cada área.</p>
            <hr />
            <div className="">
          <div className="d-flex justify-content-center" >
              <img src={semaforos} className="w-75"/>
          </div>
            </div>
            </div>
            <div className="pt-5 mb-5 text-light container">
            <h4>¿Cuál es el mejor semáforo para el enclavamiento?</h4>
            <p>No hay un tipo de semáforo que sea mejor que otro. Se diferencian por estética y por su capacidad sanitaria, que pueden ser de <b>embutir y de aplicar</b>.</p>
            <hr />
            <div className="">
          <div className="d-flex justify-content-center" >
              <img src={sema} className="w-75 rounded cardSemaforo"/>
          </div>
            </div>
            </div>
        </section>
    )
}
