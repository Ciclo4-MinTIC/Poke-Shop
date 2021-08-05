import React from "react";

const VistaProducto = () => {
  return (
    <div>

      {/* Modal */}
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content ">
            <div className="modal-header bg-dark ">
              <h3 className="modal-title text-light " id="exampleModalLabel">
                Mewtwo
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
                  <div className="col-md-4 borde-gris">                  
                    <img
                      src="../assets/Mewtwo.jpg"
                      
                      alt=""
                    ></img>                   

                  </div>
                  <div className="col-md-8 ">
                    

                    <dl className="row">
                      <dt className="col-sm-3 text-start">Calificación:</dt>
                      <dd className="col-sm-9 text-start">5</dd>

                      <dt className="col-sm-3 text-start">Precio:</dt>
                      <dd className="col-sm-9 text-start">200.000 cop</dd>

                      <dt className="col-sm-3 text-start">Tipo:</dt>
                      <dd className="col-sm-9 text-start">Psíquico</dd>

                      <dt className="col-sm-3 text-start ">Habilidad:</dt>
                      <dd className="col-sm-9 text-start">Presión</dd>

                      <dt className="col-sm-3 text-start ">Altura:</dt>
                      <dd className="col-sm-9 text-start">2 m</dd>

                      <dt className="col-sm-3 text-start">
                          Descripción del producto:</dt>
                      <dd className="col-sm-9 text-start">
                      Es un pokémon legendario, creado
                      genéticamente a partir del ADN de Mew. Es capaz de
                      megaevolucionar.
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
  );
};

export default VistaProducto;
