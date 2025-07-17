import React from 'react'
import schentex from '../assets/schentex.webp'
import logoblanco from '../assets/logoblanco.webp'
export const Footer = () => {
    return (
        <footer className="p-5 text-secondary">
            <div className="row pb-5">
                <div className="col-sm-12 col-md-3">
                  
                    <img src={schentex} className="w-75" />
            
                </div>
                <div className="col-sm-12 col-md-3">
                    <h6 className="text-light">Datos de contacto</h6>
                </div>
                <div className="col-sm-12 col-md-3">
                <h6 className="text-light">Navegación</h6>
                <ul>
                    <li className="text-decoration-none">Inicio</li>
                    <li>enclavamientos</li>
                    <li>Contacto</li>
                </ul>
                </div>
                <div className="col-sm-12 col-md-3">
                    <h6 className="text-light">Redes Sociales</h6>


                </div>
            </div>
        </footer>
    )
}
