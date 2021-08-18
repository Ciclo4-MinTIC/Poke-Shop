import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Catalogo from './Catalogo'
import { Route, Redirect } from "react-router-dom";
import swal from 'sweetalert';




const Catalogos = () => {

    const [listaProductos, setLista] = useState([]);

    useEffect (() =>  {
        if(localStorage.jwtToken != null){
            axios.get('http://localhost:4000/catalogo/productos')
            .then(res => {
                setLista(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
        }
        
    }, [])
    
    return (
        <div>
            <Route>
                {
                    localStorage.jwtToken !=  null ? (
                        <div className="container d-flex justify-content-center aligh-items-center">
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
                    ) : 
                    (   
                        
                        <Redirect to="/"> 
                            {
                                swal("Oops !!", "Por favor inicie sesión primero", "error")
                            }
                        </Redirect>
                    )
                
                }
            </Route>
        </div>
        
    )
};

export default Catalogos




