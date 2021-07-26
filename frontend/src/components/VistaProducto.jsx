import React from "react";

const VistaProducto = () => {
  return (
    <div>

      {/* Modal */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content ">
            <div class="modal-header bg-dark ">
              <h3 class="modal-title text-light " id="exampleModalLabel">
                Mewtwo
              </h3>
              <button
                type="button"
                class="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close "
              ></button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-4 borde-gris">                  
                    <img
                      src="../assets/Mewtwo.jpg"
                      
                      alt=""
                    ></img>                   

                  </div>
                  <div class="col-md-8 ">
                    

                    <dl class="row">
                      <dt class="col-sm-3 text-start">Calificación:</dt>
                      <dd class="col-sm-9 text-start">5</dd>

                      <dt class="col-sm-3 text-start">Precio:</dt>
                      <dd class="col-sm-9 text-start">200.000 cop</dd>

                      <dt class="col-sm-3 text-start">Tipo:</dt>
                      <dd class="col-sm-9 text-start">Psíquico</dd>

                      <dt class="col-sm-3 text-start ">Especie:</dt>
                      <dd class="col-sm-9 text-start">Pokémon genético</dd>

                      <dt class="col-sm-3 text-start ">Habilidad:</dt>
                      <dd class="col-sm-9 text-start">Presión</dd>

                      <dt class="col-sm-3 text-start ">Altura:</dt>
                      <dd class="col-sm-9 text-start">2 m</dd>

                      <dt class="col-sm-3 text-start">
                          Descripción del producto:</dt>
                      <dd class="col-sm-9 text-start">
                      Es un pokémon legendario, creado
                      genéticamente a partir del ADN de Mew. Es capaz de
                      megaevolucionar.
                      </dd>
                    </dl>
                  </div>

                  
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-warning"
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
