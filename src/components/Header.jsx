import React from 'react';
import giftheader from '../assets/giftheader.mp4';

export const Header = () => {
    return (
        <header className="text-light text-center pb-3  container ">
        
            <div className="row p-5">

                <div className="col-sm-12 col-md-6 p-5">
                    <h1 className="">Sistemas de enclavamiento de esclusas</h1>
                    <p className="">
                        Garantizando la seguridad y eficiencia  <br />en el acceso de <b>áreas clasificadas</b>
                    </p>

                    <button className="btn btn-success px-5 pt-2 pb-2 d-inline-flex align-items-center gap-2">
                        Ver Más
                        <i className="fi fi-ts-arrow-small-right" style={{ fontSize: "1rem" }}></i>
                    </button>
                </div>

                <div className="col-sm-12 col-md-6 pt-4">
                <video
                        src={giftheader}
                        className="img-fluid"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>

            
        </header>
    );
};
