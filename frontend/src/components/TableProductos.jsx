import React, {useState, useEffect} from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import ModalEditar from './ModalEditar'

const TableProductos = () => {
    const [listaProductos, setLista] = useState([])


    useEffect(() => {
        axios
        .get('http://localhost:4000/catalogo/productos')
        .then((res) => {
            setLista(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    const deleteProduct = (e, id) => {
        
        e.preventDefault();

        axios.delete('http://localhost:4000/catalogo/producto/delete/' + id)
        .then((res) => {
            swal('Pokémon eliminado', 'El pokémon fue eliminado de la tienda', 'success')
            window.location.href = "./productos"
        }).catch((e) => console.log('No sirvio', e))

    }

    return (
        <div>
            <table className="table table-bordered align-middle bg-dark text-light">
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
                    {listaProductos.map((producto) => (
                        <tr key={producto._id}>
                            <td>
                            <img
                                className="imagen-miniatura img-fluid"
                                src={producto.imagen}
                                alt="imagen"
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
                                <ModalEditar producto={producto}></ModalEditar>
                                <button className="btn btn-outline-danger" onClick={(e) => deleteProduct(e, producto._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableProductos
