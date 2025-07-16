import React from 'react'
import schentex from '../assets/schentex.webp'
export const HowWeWork = () => {
    return (
        <section className="text-light text-center pt-5 ">
            <div className="bg-light p-5"></div>
            <div className="container pb-5">

            
            
            <div className="mt-5">
                <img src={schentex} className="w-25 mb-3" />
            <h2 className="mt-2 mb-4">¿Cómo funciona nuestro sistema?</h2>
            </div>

            <div>
                <p className="mb-5">Nuestro sistema de enclavamiento de esclusas está diseñado para garantizar el control y la 
eficiencia del acceso en áreas clasificadas de una Sala Limpia.  </p>
<p>Integrado por plaquetas electrónicas, relés, cerraduras y botones de emergencia, permite el 
realizar el proceso de Interlock/Enclavamiento de una o varias puertas, asegurando que nunca 
puedan abrirse simultáneamente, evitando la contaminación cruzada y regulando la presión 
entre áreas.</p>
            </div>



            </div>
        </section>
    )
}
