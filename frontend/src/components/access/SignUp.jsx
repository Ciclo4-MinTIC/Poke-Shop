import React, {useState} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({
        name: "",
        lastName: "",
        password: "",
        email: ""
    })

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
                if(res.data.register){
                    swal("Bienvenido", "Registro exitoso!!", "success");
                    window.location.href = '/'
                }
                else{
                    setErrors(res.data.errors)
                }
            })
        .catch(e => console.log("No sirvio", e))
    }
    return (
        <div>
            <form className="row g-3">
                <div className="form-group mb-3 col-md-6">
                    <label htmlFor="InputName" className="text-light">Nombre</label>
                    <input type="text" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setName(e.target.value)}} id="InputName" placeholder="John" value={name} required/>
                    <span className="text-danger">{errors.name}</span>
                </div>
                <div className="form-group mb-3 col-md-6">
                    <label htmlFor="InputLastName" className="text-light">Apellido</label>
                    <input type="text" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setLastName(e.target.value)}} id="InputLastName" placeholder="Doe" value={lastName} required/>
                    <span className="text-danger">{errors.lastName}</span>
                </div>
                <div className="form-group mb-3 col-12">
                    <label htmlFor="InputEmail" className="text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                    <span className="text-danger">{errors.email}</span>
                </div>
                <div className="form-group mb-3 col-12">
                    <label htmlFor="InputPassword" className="text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light mb-3" onChange={(e) => {setPassword(e.target.value)}} id="InputPassword" placeholder="Password" value={password} required/>
                    <span className="text-danger">{errors.password}</span>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate}>Registrarme</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
