import React, { useState } from 'react'
import axios from 'axios'
import './catalogos.css'
import swal from 'sweetalert'
import TableProductos from './TableProductos'

const Productos = () => {

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [imagen, setImagen] = useState("")
  const [precio, setPrecio] = useState("")
  const [calificacion, setCalificacion] = useState("")
  const [tipo, setTipo] = useState("")
  const [habilidad, setHabilidad] = useState("")
  const [altura, setAltura] = useState("")
  const [errors, setErrors] = useState({
    titulo: "",
    descripcion: "",
    imagen: "",
    precio: "",
    calificacion: "",
    tipo: "",
    habilidad: "",
    altura: "",
  })

  const validate = (e) => {
    e.preventDefault()

    const newProducto = {
      titulo: titulo,
      descripcion: descripcion,
      imagen: imagen,
      precio: precio,
      calificacion: calificacion,
      tipo: tipo,
      habilidad: habilidad,
      altura: altura,
    }

    axios
      .post('http://localhost:4000/catalogo/producto/create', newProducto)
      .then((res) => {
        if (res.data.guardado) {
          swal('Pokémon guardado', 'El registro del pokémon fue exitoso', 'success')
          window.location.href = "./productos"
        } else {
          setErrors(res.data.errors)
        }
      })
      .catch((e) => console.log('No sirvio', e))
  }

  return (
    <div>
      <div className="container">
        <h1>Productos</h1>
        <p>
          <button
            className="btn btn-warning"
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
          <div className="container bg-secondary text-light border">
            <form action="" className="p-3">
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Título</label>
                    <input
                      onChange={(e) => {
                        setTitulo(e.target.value)
                      }}
                      value={titulo}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.titulo}</span>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Habilidad</label>
                    <input
                      onChange={(e) => {
                        setHabilidad(e.target.value)
                      }}
                      value={habilidad}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.habilidad}</span>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Tipo</label>
                    <input
                      onChange={(e) => {
                        setTipo(e.target.value)
                      }}
                      value={tipo}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.tipo}</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Descripción</label>
                    <textarea
                      onChange={(e) => {
                        setDescripcion(e.target.value)
                      }}
                      value={descripcion}
                      type="text"
                      name=""
                      id=""
                      className="form-control bg-transparent text-light"
                    ></textarea>
                    <span className="text-danger">{errors.descripcion}</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Altura</label>
                    <input
                      onChange={(e) => {
                        setAltura(e.target.value)
                      }}
                      value={altura}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.altura}</span>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Precio</label>
                    <input
                      onChange={(e) => {
                        setPrecio(e.target.value)
                      }}
                      value={precio}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.precio}</span>
                </div>
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Calificación</label>
                    <input
                      onChange={(e) => {
                        setCalificacion(e.target.value)
                      }}
                      value={calificacion}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.calificacion}</span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group mb-2">
                    <label htmlFor="" className="mb-3">Imágen</label>
                    <input
                      onChange={(e) => {
                        setImagen(e.target.value)
                      }}
                      value={imagen}
                      type="text"
                      className="form-control bg-transparent text-light"
                    />
                  </div>
                  <span className="text-danger">{errors.imagen}</span>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                <button className="btn btn-outline-warning" onClick={validate}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr />
        
        <TableProductos></TableProductos>

      </div>
    </div>
  )
}

export default Productos
