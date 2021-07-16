import React from 'react'

const SignIn = () => {
    return (
        <div>
            <form className="row g-3">
                <div className="form-floating mb-3 col-md-6">
                    <input type="text" className="form-control" id="InputName" placeholder="John" required/>
                    <label for="InputName">Email address</label>
                </div>
                <div className="form-floating mb-3 col-md-6">
                    <input type="text" className="form-control" id="InputLastName" placeholder="Doe" required/>
                    <label for="InputLastName">Email address</label>
                </div>
                <div className="form-floating mb-3 col-12">
                    <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" required/>
                    <label for="InputEmail">Email address</label>
                </div>
                <div className="form-floating mb-3 col-12">
                    <input type="password" className="form-control" id="InputPassword" placeholder="Password" required/>
                    <label for="InputPassword">Email address</label>
                </div>
                <div>
                    <button className="btn btn-primary">Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
