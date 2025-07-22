import React from 'react'
import cerradura from '../assets/cerradura.webp'
import cerradura2 from '../assets/cerradura2.webp'
import marco from '../assets/marco.webp'
import marco2 from '../assets/marco2.webp'
import boton from '../assets/boton.webp'
import boton2 from '../assets/boton2.webp'
import biometrica from '../assets/biometrica.webp'
import teclado2 from '../assets/teclado2.webp'
export const Adaptability = () => {
    return (
        <section className="text-light">
          <div className="bg-light  mb-3 wrapper">
                <h2><b>Adaptabilidad</b></h2>
          </div>

<div className="container">


            <div className="row  ">
                <div className="col-sm-12 col-md-6 ">
                    <h2><b>Cerraduras</b></h2>
                    <hr />
                    <p>Utilizadas para llevar a cabo el proceso de Interlock/Enclavamiento de las puertas, trabajamos con Electromagnéticas y de Perno Solenoide, las mismas se diferencian por capacidad sanitaria. </p>
                </div>
                <div className="col-sm-12 col-md-6">
                <div className="d-flex justify-content-center ">
                 
                <div>
                    <img src={cerradura2}  className="w-75 "/>
                    </div>
                   
                </div>

                </div>
            </div>


            <div className="row  pb-5">
                <div className="col-sm-12 col-md-6 mt-5">
                <div className="d-flex justify-content-center ">
                 
                <div className="d-flex">
                    <img src={boton}  className="w-50 "/>
                    <img src={boton2}  className="w-50 "/>
                    </div>
                   
                </div>

                </div>
                <div className="col-sm-12 col-md-6 mt-5 ">
                    <h2><b>Botones de emergencias</b></h2>
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
                    <img src={biometrica}  className="w-50 "/>
                    <img src={boton2}  className="w-50 "/>
                    </div>
                   
                </div>

                </div>
            </div>
            
            </div>
        </section>
    )
}
