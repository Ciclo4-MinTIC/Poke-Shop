import React from 'react'
import Catalogo from './Catalogo'

function Catalogos() {
    return (
        <div className="container">
            <div classnmae="row">
                <div className="col-md-4">
                    <Catalogo/>
                </div>
                <div className="col-4">
                    <Catalogo/>
                </div>
                <div className="col-md-4">
                    <Catalogo/>
                </div>
               
            </div>
           
        </div>
    )
}

export default Catalogos




