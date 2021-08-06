import React from "react";
import Catalogos from "./components/Catalogos";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import Producto from "./components/productos";

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
            <Catalogos className="Catalogo"/>
          </Route>   
          <Route path="/admin/productos">
            <Producto />
          </Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
