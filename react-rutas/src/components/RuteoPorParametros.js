import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Template = () => {
  let { id } = useParams();
  console.log(id, useParams());
  return (
    <div>
      <h3>Este es el producto {id}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        repudiandae maiores quas ex rem voluptatibus. Id quidem quasi, earum
        perferendis quisquam ipsa explicabo ut vitae eaque harum enim sapiente
        repellat.
      </p>
    </div>
  );
};

const RuteoPorParametros = () => {
  return (
    <Router>
      <h2>Ruteo por Parámetros</h2>
      <nav>
        <Link to="/producto/1" className="App-link">
          Producto Uno
        </Link>
        <span>-</span>
        <Link to="/producto/2" className="App-link">
          Producto Dos
        </Link>
        <span>-</span>
        <Link to="/producto/3" className="App-link">
          Producto Tres
        </Link>
      </nav>
      <Switch>
        <Route path="/producto/:id" component={Template} />
      </Switch>
    </Router>
  );
};

export default RuteoPorParametros;
