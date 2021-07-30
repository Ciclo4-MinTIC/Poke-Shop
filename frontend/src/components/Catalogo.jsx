import React from "react";
import './catalogos.css'
import PropTypes from 'prop-types'



const Catalogo = ({title, imageSource, text}) => {
  return (
    <div>
      
      <div className="card text-center my-4 border-dark bg-dark">
        <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top"></img>
        </div>
        <div className="card-body text-light">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {
              text? text: 'Por favor agregue una descripción'
            }
          </p>
          <a href="#!" className="btn btn-outline-secondary border-0">
          </a>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-outline-warning btn-sm"
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

Catalogo.propTypes =
{
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Catalogo;
