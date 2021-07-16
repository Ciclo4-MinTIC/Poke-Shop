import React from 'react'

const SignUp = () => {
    return (
        <div>
            <form className="row g-3">
                <div className="form-group mb-3 col-md-6">
                    <label for="InputName">Nombre</label>
                    <input type="text" className="form-control" id="InputName" placeholder="John" required/>
                </div>
                <div className="form-group mb-3 col-md-6">
                    <label for="InputLastName">Apellido</label>
                    <input type="text" className="form-control" id="InputLastName" placeholder="Doe" required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputEmail">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" required/>
                </div>
                <div>
                    <button className="btn btn-primary">Registrarme</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
