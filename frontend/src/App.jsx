import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Access from './components/Access';
import NavBar from './components/navbar';
// import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Access></Access>
    </div>
  );
}

export default App;
