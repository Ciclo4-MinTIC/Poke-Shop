import React from 'react'

const productos = () => {
  return (
    <div>
      <div className="container">
        <h1>Productos</h1>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            + Agregar un producto
          </button>
        </p>
        <div class="collapse" id="collapseExample">
          <div className="container border">
            <form action="" className="p-3">
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Título</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Habilidad</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Tipo</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Descripción</label>
                    <textarea name="" id="" className="form-control"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Altura</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Precio</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Calificación</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="">Imágen</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary">Guardar</button>
              </div>
            </form>
          </div>
        </div>

        <hr />
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Imágen</th>
              <th scope="col">Título</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Calificación</th>
              <th scope="col">Habilidad</th>
              <th scope="col">Altura</th>
              <th scope="col">Tipo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-flex justify-content-center">
                <img
                  className="imagen-miniatura img-fluid"
                  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png"
                  alt=""
                />
              </td>
              <th>Pikachu</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <button className="btn btn-outline-warning">Editar</button>{' '}
                <button className="btn btn-outline-danger">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default productos
