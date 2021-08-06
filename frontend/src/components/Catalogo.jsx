import React from "react";
import './catalogos.css'
import PropTypes from 'prop-types'



const Catalogo = ({title, imageSource, text, informacion}) => {

  return (
    <div>
      
      <div className="card text-center my-4 border-dark bg-dark">
        <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top"></img>
        </div>
        <div className="card-body text-light">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {
              text? text: 'Por favor agregue una descripción'
            }
          </p>
          <a href="#!" className="btn btn-outline-secondary border-0">
          </a>
          

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target={'#'+informacion.titulo}
          >
            Visualización del producto
          </button>

          {/* Modal */}
          <div
            className="modal fade "
            id={informacion.titulo}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
              <div className="modal-dialog modal-lg">
                <div className="modal-content ">
                  <div className="modal-header bg-dark ">
                    <h3 className="modal-title text-light " id="exampleModalLabel">
                      {informacion.titulo}
                    </h3>
                    <button
                      type="button"
                      className="btn-close "
                      data-bs-dismiss="modal"
                      aria-label="Close "
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-4 borde-gris bg-dark">                  
                          <img
                            src={informacion.imagen}
                            className="img-fluid"
                            onTouchCancel
                            alt="imagen"
                          ></img>                   

                        </div>
                        <div className="col-md-8 ">
                          

                          <dl className="row">
                            <dt className="col-sm-3 text-start text-dark">Calificación:</dt>
                            <dd className="col-sm-9 text-start text-dark">{informacion.calificacion}</dd>

                            <dt className="col-sm-3 text-start text-dark">Precio:</dt>
                            <dd className="col-sm-9 text-start text-dark">{informacion.precio}</dd>

                            <dt className="col-sm-3 text-start text-dark">Tipo:</dt>
                            <dd className="col-sm-9 text-start text-dark">{informacion.tipo}</dd>

                            <dt className="col-sm-3 text-start text-dark">Habilidad:</dt>
                            <dd className="col-sm-9 text-start text-dark">{informacion.habilidad}</dd>

                            <dt className="col-sm-3 text-start text-dark ">Altura:</dt>
                            <dd className="col-sm-9 text-start text-dark">{informacion.altura}</dd>

                            <dt className="col-sm-3 text-start text-dark">
                                Descripción del producto:</dt>
                            <dd className="col-sm-9 text-start text-dark">
                            {informacion.descripcion}
                            </dd>
                          </dl>
                        </div>

                        
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
          </div>

          
          
        </div>
        
      </div>
    </div>
  );
};

Catalogo.propTypes =
{
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Catalogo;
