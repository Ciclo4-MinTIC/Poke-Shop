import React from "react";
import Catalogo from "./components/Catalogo";
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
          <Route path="/catalogo">
            <Catalogo />
          </Route>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

      <VistaProducto></VistaProducto>
    </div>
  );
}

export default App;
