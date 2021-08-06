import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Productos = () => {

  const [listaProductos, setLista] = useState([]);

  useEffect (() =>  {
    axios.get('http://localhost:4000/catalogo/productos')
      .then(res => {
        setLista(res.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])





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
        <div className="collapse" id="collapseExample">
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
        <table className="table table-striped table-bordered">
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
            {
              listaProductos.map(producto => 
                <tr>
                  <td className="d-flex justify-content-center">
                    <img
                      className="imagen-miniatura img-fluid"
                      src={producto.imagen}
                      alt=""
                    />
                  </td>
                  <th>{producto.titulo}</th>
                  <td>{producto.descripcion}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.calificacion}</td>
                  <td>{producto.habilidad}</td>
                  <td>{producto.altura}</td>
                  <td>{producto.tipo}</td>
                  <td>
                    <button className="btn btn-outline-warning">Editar</button>{' '}
                    <button className="btn btn-outline-danger">Eliminar</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Productos
