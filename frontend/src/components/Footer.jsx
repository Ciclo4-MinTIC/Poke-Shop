import React from 'react'

const Footer = () => {
  return (
    <div>
      <div class="footer-clean bg-dark text-light">
        <footer>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-5 item">
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
              <div class="col-5 item">
                <h3>Conocenos</h3>
                <ul>
                  <li>
                    <a href="#">¿Quienes somos?</a>
                  </li>
                </ul>
              </div>
              <div class="col-2 item social">
                <a
                  href="https://github.com/Ciclo4-MinTIC/Poke-Shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="icon ion-social-github"></i>
                </a>
                <p class="copyright">Poke-shop © 2021</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
