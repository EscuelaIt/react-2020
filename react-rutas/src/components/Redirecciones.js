import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "../pages/Home";
import Acerca from "../pages/Acerca";
import Error404 from "../pages/Error404";

export const Redirecciones = () => {
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
          <Link to="/about" className="App-link">
            About
          </Link>
          <span>-</span>
          <Link exact to="/contacto" className="App-link">
            Contacto
          </Link>
          <span>-</span>
          <Link exact to="/contact" className="App-link">
            Contact
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
          <Route path="/about">
            <Redirect to="/acerca" />
          </Route>
          <Route path="/contacto" children={<h3>Contacto</h3>} />
          <Route path="/contact">
            <Redirect to="/contacto" />
          </Route>
          <Route path="*" children={<Error404 />} />
        </Switch>
      </main>
    </Router>
  );
};

export default Redirecciones;
