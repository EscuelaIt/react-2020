import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Error404 from "../pages/Error404";

const RuteoAnidado = () => {
  return (
    <Router>
      <h2>Ruteo Anidado</h2>
      <nav>
        <Link to="/" className="App-link">
          Home
        </Link>
        <span>-</span>
        <Link to="/productos" className="App-link">
          Productos
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/productos" component={Productos} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default RuteoAnidado;
