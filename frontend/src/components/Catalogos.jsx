import React from 'react'
import Catalogo from './Catalogo'
import Umbreon from "../assets/Umbreon.jpg";
import Luxray from "../assets/Luxray.jpg";
import Pikachu from "../assets/Pikachu.jpg";

const catalogos =
[
    {
        id: 1,
        title: 'Umbreon',
        image: Umbreon
        
        
    },
    {
        id: 2,
        title: 'Luxray',
        image: Luxray
    
    },
    {
        id: 3,
        title: 'Pikachu',
        image: Pikachu
       
       
    },
]


function Catalogos(){
    
    return (
        <div className="container d-flex justify-content-center aligh-items-center h-100">
            
            <div className="row">  
                {
                    catalogos.map(catalogo =>(
                    <div className="col-md-4" key={catalogo.id}>
                        <Catalogo title={catalogo.title} imageSource={catalogo.image} text={catalogo.text}/>
                    </div>
                    ))
                }     
            </div>
        </div>
    )
}

export default Catalogos




