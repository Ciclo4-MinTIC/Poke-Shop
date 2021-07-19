import React, {useState} from 'react'
import Login from './access/Login';
import SignUp from './access/SignUp';


const Access = () => {

    const [stateCover, setStateCover] = useState("Signup");

    const handleCover = () => {

        if (stateCover === "Login") {
            setStateCover("SignUp");
        } else {
            setStateCover("Login");
        }

    };

    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="accessModal" tabindex="-1" aria-labelledby="accessModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="accessModalLabel">Poke-Shop</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                (stateCover==="Login")?
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-outline-warning" onClick={handleCover}> ← Login</button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-outline-warning " onClick={handleCover}> Sign Up → </button>
                                    </div>
                            }
                            {
                                (stateCover === "Login")?
                                    <div className="p-2">
                                        <SignUp></SignUp>       
                                    </div>
                                    :
                                    <div className="p-2">
                                        <Login></Login>
                                    </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Access
