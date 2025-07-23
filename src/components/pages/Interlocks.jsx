import React, {useEffect} from 'react'
import simple from '../../assets/simple.mp4'
import giftheader from '../../assets/giftheader.mp4'
import complejo from '../../assets/complejo.mp4'
import { Adaptability } from '../Adaptability'
import {Link, useLocation} from 'react-router-dom'





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
        <section className=" text-light mt-5  pb-5 ">
            
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
                    <section className="pb-4 container">

                 
                    <h3>Conceptos generales</h3>
                    <hr />
                <div className="border p-3 indice backgroundCards text-light mb-3">
                <b >Esclusa</b> <br/> 
                <p  id="esclusas"  className="mt-2">Espacio/habitación con dos o más puertas que conecta las zonas estériles con las exteriores (zonas con menos control o niveles de limpieza diferentes). El diseño de sus puertas no permite su apertura en simultáneo con el fin de prevenir la entrada de aire contaminado y mantener la presión positiva dentro de la Sala Limpia.
</p>
                </div>
<div className="border p-3   indice backgroundCards text-light mb-3">
<b className="">Área Clasificada / Sala Limpia</b><br/>
<p  id="salalimpia" className="mt-2">
  Habitaciones preparadas especialmente para obtener bajos niveles de contaminación. Cada sala se diseña con un propósito particular, por lo tanto, varían según cada industria.                     Más información sobre Salas Limpias aquí.
</p>
</div>

        <div className="border p-3  indice backgroundCards text-light">
        <b >Interlock / Enclavamiento</b><br/> 
<p  id="enclavamiento" className="mt-2"> Condicionamiento del estado de dos o más mecanismos para que sean mutuamente dependientes. En nuestro caso, el condicionamiento es sobre las puertas de las esclusas.</p>

        </div>
</section>
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
                 <li> GMP - Buenas prácticas</li>
                 <li>ANMAT & SENASA</li>
             </ul>
         </div>
         <div className="  border p-3 mt-4 container shadow backgroundCards text-light indice" >
             <p><b>¿Cuál es el objetivo del sistema de enclavamiento?</b></p>
             <p className="small">El objetivo central de un sistema de enclavamiento en salas limpias es asegurar la inocuidad del espacio, proteger materiales sensibles de posibles contaminantes externos y facilitar la correcta circulación del personal entre las áreas. </p>
            
         </div>
         <div className="  border p-3 mt-4 container shadow backgroundCards text-light indice">
             <p><b>¿Qué industrias pueden beneficiarse de este sistema?</b></p>
             <p className="small">Trabajamos con laboratorios, farmacéuticas, hospitales, industrias alimenticias y empresas de electrónica de precisión.</p>
            
         </div>
         </section>
                </div>
        </section>
        </>
    )
}
