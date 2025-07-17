import React from 'react'
import giftheader from '../assets/giftheader.mp4';
import schentex from '../assets/schentex.webp'
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
                <p className="mb-5">Nuestro <b>sistema de enclavamiento de esclusas</b> está diseñado para garantizar el control y la 
eficiencia del acceso en áreas clasificadas de una <b>Sala Limpia.</b>  </p>
<p>Integrado por plaquetas electrónicas, relés, cerraduras y botones de emergencia, permite el 
realizar el proceso de <b>Interlock/Enclavamiento</b> de una o varias puertas, asegurando que nunca 
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
