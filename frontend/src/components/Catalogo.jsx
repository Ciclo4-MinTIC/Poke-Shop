import React from "react";
import Luxray from "../assets/Luxray.jpg";
import Pikachu from "../assets/Pikachu.jpg";
import Umbreon from "../assets/Umbreon.jpg";

const Catalogo = () => {
  return (
    <div>
      <p>Catalogo Pokemon</p>
      <div class="card">
        <img src={Luxray} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Umbreon</h5>
          <p class="card-text">
            Cuando se enfurece, secreta un sudor venenoso por los poros que
            lanza a los ojos de sus enemigos. En las noches de luna llena, o
            cuando se exalta, le empiezan a brillar los anillos de color dorado.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <img src={Pikachu} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Luxray</h5>
          <p class="card-text">
            Tiene la capacidad de ver a través de cualquier cosa. Encuentra
            enseguida su presa, aunque se oculte tras una pared de gran grosor.
            Duerme durante largos períodos para recuperar la enorme cantidad de
            electricidad que consume al usar su capacidad para ver a través de
            objetos.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <img src={Umbreon} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">Pikachu</h5>
          <p class="card-text">
            Cuanto más potente es la energía eléctrica que genera este Pokémon,
            más suaves y elásticas se vuelven las bolsas de sus mejillas. Los
            miembros de esta especie se saludan entre sí uniendo sus colas y
            transmitiéndose corriente eléctrica.
          </p>
          <a href="/" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
