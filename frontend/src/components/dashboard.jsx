import React from 'react'
import Producto from "./productos";
import jwt_decode from "jwt-decode";
import { Route, Redirect } from 'react-router-dom';
import swal from 'sweetalert'

const Dashboard = () => {

    return (
        <div>
            <Route>
                {
                    (localStorage.jwtToken != null)?
                        (jwt_decode(localStorage.jwtToken).roll === "Administrador")?
                            <Producto/>
                            :
                            <Redirect to="/"> 
                            {
                                swal("Oops !!", "No puedes ingresar a esta ruta", "error")
                            }
                            </Redirect>
                        :
                        <Redirect to="/"> 
                            {
                                swal("Oops !!", "No puedes ingresar a esta ruta", "error")
                            }
                        </Redirect>
                }
            </Route>
        </div>
    )
}

export default Dashboard
