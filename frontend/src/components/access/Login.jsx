import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label for="InputEmail" className="mb-2 text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" id="InputEmail" placeholder="name@example.com" required/>
                </div>
                <div class="form-group mb-3">
                    <label for="InputPassword" className="mb-2 text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" id="InputPassword" placeholder="Password" required/>
                </div>
                <div>
                    <button className="btn btn-outline-warning ">Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
