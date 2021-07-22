import React from "react";
import Access from "./Access";

const navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Poke Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/catalogo">
                  Catálogo
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  ¿Quienes somos?
                </a>
              </li>
            </ul>
              <button
                type="button"
                className="btn btn-warning text-light"
                data-bs-toggle="modal"
                data-bs-target="#accessModal"
              >
                Acceso
              </button>
          </div>
        </div>
      </nav>
      <Access></Access>
    </div>
  );
};

export default navbar;
