import React from "react";
import './catalogos.css'




const Catalogo = ({title, imageSource, text}) => {
  return (
    <div>
      
      <div class="card text-center my-4 border-dark bg-dark">
        <div class="overflow">
        <img src={imageSource} alt="" class="card-img-top"></img>
        </div>
        <div class="card-body text-light">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
          
            Cuando se enfurece, secreta un sudor venenoso por los poros que
            lanza a los ojos de sus enemigos. En las noches de luna llena, o
            cuando se exalta, le empiezan a brillar los anillos de color dorado.
          </p>
          <a href="#!" className="btn btn-outline-secondary border-0">
          </a>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn btn-outline-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Visualización del producto
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Catalogo;
