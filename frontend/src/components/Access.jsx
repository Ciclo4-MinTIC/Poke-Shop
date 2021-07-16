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
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Poke-Shop</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {
                                (stateCover==="Login")?
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary border rounded-0 border-bottom" onClick={handleCover}> ← Login</button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary border rounded-0 border-bottom" onClick={handleCover}> Sign Up → </button>
                                    </div>
                            }
                            {
                                (stateCover === "Login")?
                                    <div class="p-2">
                                        <SignUp></SignUp>       
                                    </div>
                                    :
                                    <div class="p-2">
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
