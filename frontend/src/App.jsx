import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Access from './components/Access';
// import { Link, Route, Switch } from "react-router-dom";
import Navbar from  './components/Navbar'
import Home from './components/Home.jsx';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Access></Access>
    </div>
  );
}

export default App;
