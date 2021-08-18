import React, {useState} from 'react'
import axios from 'axios'
import swal from 'sweetalert'

const ModalEditar = ({producto}) => {

    const [titulo, setTitulo] = useState(producto.titulo)
    const [descripcion, setDescripcion] = useState(producto.descripcion)
    const [imagen, setImagen] = useState(producto.imagen)
    const [precio, setPrecio] = useState(producto.precio)
    const [calificacion, setCalificacion] = useState(producto.calificacion)
    const [tipo, setTipo] = useState(producto.tipo)
    const [habilidad, setHabilidad] = useState(producto.habilidad)
    const [altura, setAltura] = useState(producto.altura)

    const validate = (e, id) => {
        e.preventDefault()
    
        const producto = {
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen,
            precio: precio,
            calificacion: calificacion,
            tipo: tipo,
            habilidad: habilidad,
            altura: altura,
        }
    
        axios.put('http://localhost:4000/catalogo/producto/edit/' + id, producto)
        .then((res) => {
            swal('Pokémon editado', 'El pokémon fue editado con exito', 'success')
            window.location.href = "./productos"
        })
        .catch((e) => console.log('No sirvio', e))
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button
            type="button"
            className="btn btn-outline-warning"
            data-bs-toggle="modal"
            data-bs-target={'#'+ producto.titulo}
            >
                Editar
            </button>

          {/* Modal */}
            <div
            className="modal fade"
            id={producto.titulo}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h3 className="modal-title text-light " id="exampleModalLabel">
                            Editar
                        </h3>
                        <button
                        type="button"
                        className="btn-close bg-warning"
                        data-bs-dismiss="modal"
                        aria-label="Close "
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
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
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-outline-warning" onClick={(e) => validate(e, producto._id)}>
                                Guardar Cambios
                            </button>
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEditar
