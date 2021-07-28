import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const validate = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password, 
        }

        console.log(user.email)
        console.log(user.password)
        axios.post('http://localhost:4000/acceso/login' , user)
        .then(res => console.log(res))
        .catch(e => console.log("No sirvio"))
    }

    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label for="InputEmail" className="mb-2 text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                </div>
                <div class="form-group mb-3">
                    <label for="InputPassword" className="mb-2 text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" onChange={(e) => {setPassword(e.target.value)}} id="InputPassword" placeholder="Password" value={password} required/>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate} >Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
