import React, {useState} from 'react'
import { loginUser } from "../../actions/authActions";

const Login = () => {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const validate = (e) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password, 
        }

        loginUser(user)
    }

    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="InputEmail" className="mb-2 text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" onChange={(e) => {setEmail(e.target.value)}} id="InputEmail" placeholder="name@example.com" value={email} required/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="InputPassword" className="mb-2 text-light">Password</label>
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
