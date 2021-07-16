import React, {useState} from 'react'

const Access = () => {

    const [stateCover, setStateCover] = useState("SignUp");

    const handleCover = () => {

        if (stateCover === "LogIn") {
            setStateCover("SignUp");
        } else {
            setStateCover("LogIn");
        }
        
    };

    return (
        <div>
            
        </div>
    )
}

export default Access
