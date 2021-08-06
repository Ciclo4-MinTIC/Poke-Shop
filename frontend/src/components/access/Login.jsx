import React, { useState } from 'react'
import swal from 'sweetalert';
import setAuthToken from "../../utils/setAuthToken.js";
// import jwt_decode from "jwt-decode";
import axios from 'axios';

const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({
        password: "",
        email: "",
        incorrect: ""
    })


    const validate = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password, 
        }

        axios.post("http://localhost:4000/acceso/login", user)
        .then((res) => {
            if(res.data.success){
                // Save to localStorage
                // Set token to localStorage
                const { token } = res.data;
                localStorage.setItem("jwtToken", token);
                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                // const decoded = jwt_decode(token)

                swal("Bienvenido", "Logueo Exitoso!!", "success");

                window.location.href = '../catologo'
            }else{
                setErrors(res.data.errors)
            }
        })
        .catch(e => console.log("No sirvio", e))
    }

    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="InputEmail" className="mb-2 text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                    <span className="text-danger">{errors.email}</span>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="InputPassword" className="mb-2 text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setPassword(e.target.value)}} id="InputPassword" placeholder="Password" value={password} required/>
                    <span className="text-danger">{errors.password}</span>
                </div>
                <div className="mb-3">
                    <span className="text-danger">{errors.incorrect}</span>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate} >Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
