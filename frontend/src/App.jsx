import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Access from './components/Access';
// import { Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Button trigger modal */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Acceso
      </button>
      <Access></Access>
    </div>
  );
}

export default App;
