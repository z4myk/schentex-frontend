import React from 'react'

export const Contact = () => {
    return (
        <section className="container mb-5 mt-5 pt-5 text-light" id="contact">
            <h2 className="text-light text-center">Contáctanos</h2>
            <hr />
            <div className="row">


            <div className="col-sm-12 col-md-6 mt-4">
                <h6>Datos de contacto</h6>

</div>


                <div className="col-sm-12 col-md-6 ">

                <form>
                    <div className="mt-5 mb-4">
                    <label>Nombre:</label>
                    <input className="form-control text-light inputContact" />
                    </div>
                    <div className="mt-3 mb-4">
                    <label>Email: </label>
                    <input className="form-control  text-light inputContact " />
                    </div>
                    <div className="mt-3 mb-4">
                    <label>Mensaje</label>
                    <textarea className=" form-control  text-light  inputContact" rows="4"></textarea>
                    </div>
                    <button className="btn btn-success w-100">Enviar</button>
                </form>
                </div>

              
            </div>
        </section>
    )
}
