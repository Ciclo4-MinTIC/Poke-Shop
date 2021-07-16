import React from 'react'

const Login = () => {
    return (
        <div>
            <div>
                <h3>Poke-Shop</h3>
            </div>
            <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" required/>
                    <label for="InputEmail">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" required/>
                    <label for="InputPassword">Password</label>
                </div>
                <div>
                    <button className="btn btn-primary">Ingresar</button>
                </div>            
            </form>
        </div>
    )
}

export default Login
