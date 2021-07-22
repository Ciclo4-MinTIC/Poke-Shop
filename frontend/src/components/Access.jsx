import React, {useState} from 'react'
import Login from './access/Login';
import SignUp from './access/SignUp';


const Access = () => {

    const [stateCover, setStateCover] = useState("LOGIN");

    const handleCover = () => {

        if (stateCover === "LOGIN") {
            setStateCover("SIGN-UP");
        } else {
            setStateCover("LOGIN");
        }

    };

    return (
        <div>
            {/* Modal */}
            <div className="modal fade" id="accessModal" tabindex="-1" aria-labelledby="accessModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content bg-dark border">
                        <div className="modal-header">
                            <h4 className="modal-title text-warning fw-bold font-monospace" id="accessModalLabel">Poke-Shop</h4>
                            <button type="button" class="btn-close bg-warning" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-header justify-content-center">
                            <h4 className="text-warning fw-bold font-monospace">{stateCover}</h4>
                        </div>
                        <div className="modal-body">
                        
                            {
                                (stateCover==="SIGN-UP")?
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-outline-warning" onClick={handleCover}> ← Login</button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-outline-warning " onClick={handleCover}> Sign Up → </button>
                                    </div>
                            }
                            {
                                (stateCover === "SIGN-UP")?
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
