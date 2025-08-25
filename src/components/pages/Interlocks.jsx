import React, {useEffect} from 'react'
import simple from '../../assets/simple.mp4'
import giftheader from '../../assets/giftheader.mp4'
import complejo from '../../assets/complejo.mp4'

import {Link, useLocation} from 'react-router-dom'
import { Adaptability } from '../Adaptability'
import { Signaling } from './Signaling'
import { Instalation } from './Instalation'
import anmat from '../../assets/anmat.pdf'




export const Interlocks = () => {


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
        <>
        <div className="bg-light  wrapper2">
            
        <h1><b>Nuestros Enclavamientos</b></h1>
          </div>
        <section className=" text-light mt-5  ">
            
            <div className="container pb-5">

     

            <div>

            <p className="text-center"><b>Cada enclavamiento se ajusta a las necesidades específicas del área. <br />
Denominamos tres tipos de enclavamiento acorde a sus capacidades:</b></p> <br/>
            
            </div>




<div className="d-flex justify-content-center gap-5   container flex-wrap text-center">
                {/* Tarjeta de Personalización */}
                <div className="bg-dark shadow p-1 cardsInterlocks">
                    <div className="d-flex justify-content-center mt-4">
                <i class="fi fi-rs-star text-warning"></i>
                    </div>
                    <div className="p-3">
                   
                <h5>Enclavamiento <br />Simple</h5>
                <hr />
                <p className="small">Capacidad de condicionamiento: </p>
                <b className="text-light"> 2 Puertas </b>

                <video
                        src={simple}
                        className="img-fluid videoHeaderInterlocks mt-3"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />

<button className="btn btn-success mt-4 mb-4">Solicitar cotización</button>
                </div>
               
                </div>

                {/* Tarjeta de Adaptabilidad */}
                <div className="bg-dark shadow p-1 cardsInterlocks">

                <div className="d-flex justify-content-center mt-4">
                <i class="fi fi-rs-star text-warning"></i>
                <i class="fi fi-rs-star text-warning"></i>
                    </div>
                    <div className="p-3">
                   
                <h5>Enclavamiento <br />Combinado</h5>
                <hr />
                <p className="small">Capacidad de condicionamiento: </p>
                <b className="text-light"> 3 Puertas</b>
               
                
                </div>

                <video
                        src={giftheader}
                        className="img-fluid  videoHeaderInterlocks combinado"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                <button className="btn btn-success  mt-3 mb-4">Solicitar cotización</button>
                </div>

                {/* Tarjeta de Señalización */}
                <div className="bg-dark  p-1 shadow cardsInterlocks">
                <div className="d-flex justify-content-center mt-4">
                <i class="fi fi-rs-star text-warning"></i>
                <i class="fi fi-rs-star text-warning"></i>
                <i class="fi fi-rs-star text-warning"></i>
                    </div>
                    <div className="p-3">
                   
                <h5>Enclavamiento <br />Complejo</h5>
                <hr />
                <p className="small">Capacidad de condicionamiento: </p>
                <b className="text-light"> +3 Puertas</b>
                </div>

                <video
                        src={complejo}
                        className="img-fluid videoHeaderInterlocks complejo"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    <button className="btn btn-success mt-2 mb-4">Solicitar cotización</button>
                </div>

                {/* Tarjeta de Instalación */}
               
            </div>
            </div>

                <div className=" p-5  backgroundSection text-light">
                   
<section>


             <div className="mt-5 container">
             <h3>Preguntas Frecuentes</h3>
             <hr />
             </div>
         <div className="  border p-3 container shadow backgroundCards text-light indice">
             <p><b>¿Qué normativas de salas limpias se facilitan al contar con un sistema de enclavamientos instalado?</b></p>
             <p className="small">Contar con un sistema de enclavamientos instalado colabora con el cumplimiento de normativas requeridas según cada sector. </p>
             <ul>
                 <li>ISO 14644</li>
                 <li>ANMAT GMP - Buenas practicas de fabricación</li> <a href={anmat} target="_blank" rel="noopener noreferrer" className="text-decoration-none textPdf">
                 <i class="fi fi-rs-file-pdf"></i> ANMAT_MED_BPF_001-017
</a>
                
             </ul>
         </div>
         <div className="  border p-3 mt-4 container shadow backgroundCards text-light indice" >
             <p><b>¿Cuál es el objetivo del sistema de enclavamiento?</b></p>
             <ul>
                 <li className="">Facilitar la correcta circulación del personal entre las áreas</li>
                 <li>
Llevar a cabo el proceso de Interlock/Enclavamiento de una o varias puertas, asegurando que nunca puedan abrirse simultáneamente, evitando la contaminación cruzada y regulando la presión entre áreas.</li>
             </ul>
            
         </div>
         <div className="  border p-3 mt-4 container shadow backgroundCards text-light indice">
             <p><b>¿Qué industrias pueden beneficiarse de este sistema?</b></p>
             <p className="small">Trabajamos con laboratorios, farmacéuticas, hospitales, industrias alimenticias y empresas de electrónica de precisión.</p>
            
         </div>
         </section>
                </div>
        </section>

<section id="adaptability">

   <Adaptability />
</section>
        
        <section id="signaling">
   <Signaling />
        </section>

<section id="instalation">

   <Instalation />
</section>
        </>
    )
}
