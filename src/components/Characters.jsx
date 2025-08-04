import React from 'react';

export const Characters = () => {
    return (
        <section className="text-light container mb-5" id="caracteristicas">
            <div className="mb-4">
                <h2 className="text-center">Características</h2>
                <hr />
            </div>

            <div className="d-flex justify-content-center gap-4 mb-5  text-center">
                {/* Tarjeta de Personalización */}
                <div className="bg-dark shadow p-5">
                    <div>
                        <div className=" border-success p-4 mb-3">
                            <i className="fi fi-sr-settings-sliders text-success"></i>
                        </div>
                        <h6><b>Personalización</b></h6>
                        <hr />
                        <p className="small">Cada enclavamiento se ajusta a las
 necesidades específicas del área. 
</p>
                   
                        <a href="/enclavamientos"> 
                        <button className="btn btn-outline-success p-3">Ver más</button>
                        </a>
                   
                    </div>
                </div>

                {/* Tarjeta de Adaptabilidad */}
                <div className="bg-dark shadow p-5">
                    <div>
                        <div className="p-4 mb-3">
                            <i className="fi fi-rr-layers fi-4x text-success"></i>
                        </div>
                        <h6><b>Adaptabilidad</b></h6>
                        <hr />
                        <p className="small">Sistema funcional para cualquier tipo de cerradura y accesorios para el control de accesos.  </p>
                        <a href="/enclavamientos#adaptability">
                        <button className="btn btn-outline-success p-3">Ver más</button>
                        </a>
                            
                    </div>
                </div>

                {/* Tarjeta de Señalización */}
                <div className="bg-dark  p-5 shadow">
                    <div>
                        <div className="p-4 mb-3">
                            <i className="fi fi-rs-engine-warning text-success"></i>
                        </div>
                        <h6><b>Señalización</b></h6>
                        <hr />
                        <p className="small">Contamos con varios modelos de Semáforos, 
diseñados para garantizar la 
señalización lumínica  </p>
<a href="/enclavamientos#signaling">
                        <button className="btn btn-outline-success p-3">Ver más</button>
</a>
                    </div>
                </div>

                {/* Tarjeta de Instalación */}
                <div className="bg-dark p-5 shadow">
                    <div>
                        <div className="p-4 mb-3">
                            <i className="fi fi-bs-admin-alt text-success"></i>
                        </div>
                        <h6><b>Instalación</b></h6>
                        <hr />
                        <p className="small">
 Servicios de 
Instalación y Puesta en marcha
 del equipo en planta. 
</p>                  
<a href="/enclavamientos#instalation"> 
                        <button className="btn btn-outline-success p-3">Ver más</button>
</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
