import React from "react";
import Catalogos from "./components/Catalogos";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import VistaProducto from "./components/VistaProducto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/catalogo">
            <Catalogos />
          </Route>          
        </Switch>
      </Router>

      <VistaProducto></VistaProducto>
    </div>
  );
}

export default App;
