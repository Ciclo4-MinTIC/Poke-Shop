import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const validate = (e) => {
        e.preventDefault()

        console.log(user.email)
        console.log(user.password)
        axios.post('http://localhost:4000/login/validate', user)
        .then(res => console.log(res))
        .catch(e => console.log("No sirvio"))
    }

    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label for="InputEmail" className="mb-2 text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" onChange={(e) => { setUser({email: e.target.value, password: user.password}) }} id="InputEmail" placeholder="name@example.com" value={user.email} required/>
                </div>
                <div class="form-group mb-3">
                    <label for="InputPassword" className="mb-2 text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" onChange={(e) => { setUser({email: user.email, password: e.target.value}) }} id="InputPassword" placeholder="Password" value={user.password} required/>
                </div>
                <div>
                    <button className="btn btn-outline-warning " onClick={validate} >Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
