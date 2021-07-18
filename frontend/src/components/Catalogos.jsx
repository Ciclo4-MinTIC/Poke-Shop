import React from 'react'
import Catalogo from './Catalogo'

function Catalogos() {
    return (
        <div className="container">
            <h2 className="text-center border">Catálogo Pokemon</h2>
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




