import React from 'react'
import giftheader from '../assets/giftheader.mp4';
import schentex from '../assets/schentex.webp'
import {Link} from 'react-router-dom'
export const HowWeWork = () => {
    return (
        <section className="text-light text-center  mb-5 container ">
            <h2 className="mt-2 mb-4">¿Cómo funciona nuestro sistema?</h2>
            <hr />
        
            <div className="row pb-5">

            

            <div className="col-sm-12 col-md-6">
            <div className="mt-5">
                
            <img src={schentex} className="w-50 mb-3" />
            
            </div>
                <p className="mb-5">Nuestro sistema de enclavamiento de <b><Link to="enclavamientos/personalizacion/#esclusas" className="text-decoration-none hiperTexts">esclusas</Link></b> está diseñado para garantizar el control y la 
eficiencia del acceso en áreas clasificadas de una <b><Link to="enclavamientos/personalizacion/#salalimpia" className="text-decoration-none hiperTexts">Sala Limpia.</Link></b>  </p>
<p>Integrado por <b><Link to="enclavamientos/adaptabilidad/#controladores" className="text-decoration-none hiperTexts">  controladores</Link></b> electrónicos, <b><Link to="enclavamientos/senalizacion/#semaforo" className="text-decoration-none hiperTexts">semáforos</Link></b>, <b><Link to="enclavamientos/adaptabilidad/#cerradura" className="text-decoration-none hiperTexts">cerraduras</Link></b> y <b><Link to="enclavamientos/adaptabilidad/#boton-emergencia" className="text-decoration-none hiperTexts">botones de emergencia</Link></b>, permite el 
realizar el proceso de <b><Link to="enclavamientos/personalizacion/#enclavamiento"   className="text-decoration-none hiperTexts">Interlock/Enclavamiento</Link></b> de una o varias puertas, asegurando que nunca 
puedan abrirse simultáneamente, evitando la contaminación cruzada y regulando la presión 
entre áreas.</p>
            </div>

            <div className="col-sm-12 col-md-6 mt-5">

            <div className="mt-5 pt-5">
                <video
                        src={giftheader}
                        className="img-fluid videoHeader"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
               </div>
            </div>



            </div>
        </section>
    )
}
