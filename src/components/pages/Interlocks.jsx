import React from 'react'
import simple from '../../assets/simple.mp4'
import giftheader from '../../assets/giftheader.mp4'
import complejo from '../../assets/complejo.mp4'
export const Interlocks = () => {
    return (
        <section className="text-center text-light mt-5 container pb-5 ">
            <h1>Nuestros Enclavamientos</h1>
            <hr />

            <div>

            <p>Cada enclavamiento se ajusta a las necesidades específicas del área. <br />
Denominamos tres tipos de enclavamiento acorde a sus capacidades:</p> <br/>
            




<div className="d-flex justify-content-center gap-5 mb-5  flex-wrap text-center">
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
        </section>
    )
}
