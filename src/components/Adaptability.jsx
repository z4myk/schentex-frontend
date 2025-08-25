import React, {useEffect} from 'react'

import control from '../assets/control.webp'
import botones from '../assets/botones.webp'

import cerraduras from '../assets/cerraduras.webp'
import {Link, useLocation} from 'react-router-dom'
import controladores from '../assets/controladores.webp'
export const Adaptability = () => {

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
        <section className="text-light">
          <div className="bg-light  mb-3 wrapper">
                <h1><b>Adaptabilidad</b></h1>
                
          </div>

<div className="container">


                <p className="text-center mb-5 mt-5"><b>Nuestro sistema es funcional y compatible con cualquier tipo de cerradura. <br /> Ademas puede complementarse con accesorios para el control de accesos segun la necesidad del área.</b></p>
                
            <div className="row  ">
                <div className="col-sm-12 col-md-6 ">
                    <h2 id="cerradura"><b>Cerraduras</b></h2>
                    <hr />
                    <p>Utilizadas para llevar a cabo el proceso de Interlock/Enclavamiento de las puertas, trabajamos con Electromagnéticas y de Perno Solenoide, las mismas se diferencian por capacidad sanitaria. </p>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="d-flex justify-content-center ">
                 
                <div>
                    <img src={cerraduras}  className="w-100 rounded"/>
                    </div>
                   
                </div>

                </div>
            </div>


            <div className="row  pb-5">
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="d-flex justify-content-center ">
                 
                <div className="d-flex">
                    <img src={botones}  className="w-100 rounded "/>
                  
                    </div>
                   
                </div>

                </div>
                <div className="col-sm-12 col-md-6 mt-5 ">
                    <h2 id="boton-emergencia"><b>Botones de emergencias</b></h2>
                    <hr />
                    <p>Utilizados para activar el temporizador del sistema, el cual desactiva temporalmente el Interlock de las puertas, permitiendo así la libre circulación del personal a través de las esclusas en caso de emergencia. Contamos con varios modelos de botones:</p>
                </div>
            </div>



            <div className="row  pb-5">
                <div className="col-sm-12 col-md-6 mt-5 ">
                    <h2><b>Control de accesos</b></h2>
                    <hr />
                    <p>Accesorios para el control de accesos: Componentes adicionales que pueden integrarse al sistema. Estos accesorios pueden incluir lectores de tarjetas, teclados numéricos y dispositivos de autenticación biométrica.</p>
                </div>
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="d-flex justify-content-center ">
                 
                <div className="d-flex">
                    <img src={control}  className="w-100 rounded "/>
                    
                    </div>
                   
                </div>

                </div>
            </div>
            <div className="row  pb-5">
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="d-flex justify-content-center ">
                 
                <div className="d-flex">
                    <img src={controladores}  className="w-100 rounded "/>
                    
                    </div>
                   
                </div>

                </div>
                <div className="col-sm-12 col-md-6 mt-5 " >
                    <h2 id="controladores"><b>Controladores</b></h2>
                    <hr />
                    <p> Dispositivos electrónicos cuya principal función es llevar a cabo la lógica del Interlock/Enclavamiento. Representan una parte fundamental del sistema en donde se centraliza el cableado.</p>
                </div>
            </div>
            
            </div>

            <section className="p-5" style={{ position: "relative", overflow: "hidden" }}>

            <div className="gradient-bg"></div>
<h3 style={{ position: "relative", zIndex: 1 }}>Conceptos generales</h3>
<hr />
<div className="border p-3 indice backgroundCards text-light mb-3" style={{ position: "relative", zIndex: 1 }}>
<b >Esclusa</b> <br/> 
<p  id="esclusas"  className="mt-2">Espacio/habitación con dos o más puertas que conecta las zonas estériles con las exteriores (zonas con menos control o niveles de limpieza diferentes). El diseño de sus puertas no permite su apertura en simultáneo con el fin de prevenir la entrada de aire contaminado y mantener la presión positiva dentro de la Sala Limpia.
</p>
</div>
<div className="border p-3   indice backgroundCards text-light mb-3" style={{ position: "relative", zIndex: 1 }}>
<b className="">Área Clasificada / Sala Limpia</b><br/>
<p  id="salalimpia" className="mt-2">
Habitaciones preparadas especialmente para obtener bajos niveles de contaminación. Cada sala se diseña con un propósito particular, por lo tanto, varían según cada industria.                     Más información sobre Salas Limpias aquí.
</p>
</div>

<div className="border p-3  indice backgroundCards text-light" style={{ position: "relative", zIndex: 1 }}>
<b >Interlock / Enclavamiento</b><br/> 
<p  id="enclavamiento" className="mt-2"> Condicionamiento del estado de dos o más mecanismos para que sean mutuamente dependientes. En nuestro caso, el condicionamiento es sobre las puertas de las esclusas.</p>

</div>
</section>
        </section>
    )
}
