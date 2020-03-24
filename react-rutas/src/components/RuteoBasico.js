import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Acerca from "../pages/Acerca";
import Error404 from "../pages/Error404";

export const RuteoBasico = () => {
  return (
    <Router>
      <header>
        <h2>Ruteo Básico</h2>
        <nav>
          <Link to="/" className="App-link">
            Home
          </Link>
          <span>-</span>
          <Link to="/acerca" className="App-link">
            Acerca
          </Link>
          <span>-</span>
          <Link to="/contacto" className="App-link">
            Contacto
          </Link>
          <span>-</span>
          <Link to="/no-existe" className="App-link">
            No existe
          </Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/acerca">
            <Acerca />
          </Route>
          <Route path="/contacto" children={<h3>Contacto</h3>} />
          <Route path="*" children={<Error404 />} />
        </Switch>
      </main>
    </Router>
  );
};
