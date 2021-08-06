import React from "react";
import Access from "./Access";
import setAuthToken from "../utils/setAuthToken.js";

const navbar = () => {

  const logout = (e) => {
    e.preventDefault()
    // Remove auth header for future requests
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    window.location.href = '/'
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Poke Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/catalogo">
                  Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  ¿Quienes somos?
                </a>
              </li>
            </ul>
            {
                localStorage.jwtToken != null ? (
                    <button
                      type="button"
                      className="btn btn-warning text-light"
                      onClick={logout}
                    >
                      LogOut
                    </button>
                ) : (
                    <button
                      type="button"
                      className="btn btn-warning text-light"
                      data-bs-toggle="modal"
                      data-bs-target="#accessModal"
                    >
                      Acceso
                    </button>
                )
            
            }
          </div>
        </div>
      </nav>
      <Access></Access>
    </div>
  );
};

export default navbar;
