import React from "react";
import Catalogos from "./components/Catalogos";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Dashboard from "./components/dashboard";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/catalogo">
              <Catalogos/>
            </Route>   
            <Route exact path="/admin/productos">
              <Dashboard />
            </Route>        
          </Switch>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
