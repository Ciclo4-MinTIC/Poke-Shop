import React, {useState} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    
    let errors = {}

    const validate = (e) => {
        e.preventDefault()

        const newUser = {
            name: name,
            lastName: lastName,
            email: email,
            password: password, 
        }

        axios.post('http://localhost:4000/acceso/signup' , newUser)
            .then(res => {
                if(res.register){
                    swal("Bienvenido" + res.data.name, "Registro exitoso!!", "success");
                }
                else{
                    errors = res.errors
                }
            })
        .catch(e => console.log("No sirvio"))
    }
    return (
        <div>
            <form className="row g-3">
                <div className="form-group mb-3 col-md-6">
                    <label htmlFor="InputName" className="text-light">Nombre</label>
                    <input type="text" className="form-control bg-transparent text-light" onChange={(e) => {setName(e.target.value)}} id="InputName" placeholder="John" value={name} required/>
                    <span className="red-text">{errors.name}</span>
                </div>
                <div className="form-group mb-3 col-md-6">
                    <label htmlFor="InputLastName" className="text-light">Apellido</label>
                    <input type="text" className="form-control bg-transparent text-light" onChange={(e) => {setLastName(e.target.value)}} id="InputLastName" placeholder="Doe" value={lastName} required/>
                    <span className="red-text">{errors.lastName}</span>
                </div>
                <div className="form-group mb-3 col-12">
                    <label htmlFor="InputEmail" className="text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                    <span className="red-text">{errors.email}</span>
                </div>
                <div className="form-group mb-3 col-12">
                    <label htmlFor="InputPassword" className="text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" onChange={(e) => {setPassword(e.target.value)}} id="InputPassword" placeholder="Password" value={password} required/>
                    <span className="red-text">{errors.password}</span>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate}>Registrarme</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
