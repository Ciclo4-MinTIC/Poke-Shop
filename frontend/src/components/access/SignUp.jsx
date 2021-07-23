import React from 'react'

const SignUp = () => {
    
    return (
        <div>
            <form className="row g-3">
                <div className="form-group mb-3 col-md-6">
                    <label for="InputName" className="text-light">Nombre</label>
                    <input type="text" className="form-control bg-transparent text-light" id="InputName" placeholder="John" required/>
                </div>
                <div className="form-group mb-3 col-md-6">
                    <label for="InputLastName" className="text-light">Apellido</label>
                    <input type="text" className="form-control bg-transparent text-light" id="InputLastName" placeholder="Doe" required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputEmail" className="text-light">Email address</label>
                    <input type="email" className="form-control bg-transparent text-light" id="InputEmail" placeholder="name@example.com" required/>
                </div>
                <div className="form-group mb-3 col-12">
                    <label for="InputPassword" className="text-light">Password</label>
                    <input type="password" className="form-control bg-transparent text-light" id="InputPassword" placeholder="Password" required/>
                </div>
                <div>
                    <button className="btn btn-outline-warning ">Registrarme</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
