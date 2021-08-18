import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="footer-clean bg-dark text-light">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-5 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="/catalogo">Catálogo</a>
                  </li>
                </ul>
              </div>
              <div className="col-5 item">
                <h3>Conocenos</h3>
                <ul>
                  <li>
                    <a href="/">¿Quienes somos?</a>
                  </li>
                </ul>
              </div>
              <div className="col-2 item social">
                <a
                  href="https://github.com/Ciclo4-MinTIC/Poke-Shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon ion-social-github"></i>
                </a>
                <p className="copyright">Poke-shop © 2021</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
