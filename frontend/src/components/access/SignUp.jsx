import React, {useState} from 'react'
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const validate = (e) => {
        e.preventDefault()

        const newUser = {
            name: name,
            lastName: lastName,
            email: email,
            password: password, 
        }

        if(newUser.name !== "" && newUser.lastName !== "" && newUser.email !== "" && newUser.password !== "" ){
            axios.post('http://localhost:4000/signup/validate', newUser)
            .then(res => console.log(res))
            .catch(e => console.log("No sirvio"))
        }else{
            alert("no se envió petición, todos los campos son requeridos")
        }
    }
    return (
        <div>
            <form className="row g-3">
                <div className="form-group mb-3 col-md-6">
                    <label for="InputName" className="text-light">Nombre</label>
                    <input type="text" className="form-control bg-transparent text-light" onChange={(e) => {setName(e.target.value)}} id="InputName" placeholder="John" value={name} required/>
                </div>
                <div className="form-group mb-3 col-md-6">
                    <label for="InputLastName" className="text-light">Apellido</label>
                    <input type="text" className="form-control bg-transparent text-light" onChange={(e) => {setLastName(e.target.value)}} id="InputLastName" placeholder="Doe" value={lastName} required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputEmail" className="text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputPassword" className="text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" onChange={(e) => {setPassword(e.target.value)}} id="InputPassword" placeholder="Password" value={password} required/>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate}>Registrarme</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
