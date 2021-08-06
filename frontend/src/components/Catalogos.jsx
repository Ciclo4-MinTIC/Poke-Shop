import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Catalogo from './Catalogo'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";




const Catalogos = () => {

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
        <div className="Catalogo container d-flex justify-content-center aligh-items-center">
            
            <div className="row">  
                {
                    listaProductos.map(producto =>(
                    <div className="col-md-4" key={producto._id}>
                        <Catalogo title={producto.titulo} imageSource={producto.imagen} text={producto.descripcion} informacion={producto}/>
                    </div>
                    ))
                }     
            </div>
        </div>
    )
}

export default Catalogos




