import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <div className="form-group mb-3">
                    <label for="InputEmail" className="mb-2">Email address</label>
                    <input type="email" className="form-control inputsm" id="InputEmail" placeholder="name@example.com" required/>
                </div>
                <div class="form-group mb-3">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" required/>
                </div>
                <div>
                    <button className="btn btn-primary">Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
