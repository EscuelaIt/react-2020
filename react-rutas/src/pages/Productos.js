import React from "react";
import {
  Link,
  useRouteMatch,
  Route,
  Switch,
  useParams
} from "react-router-dom";

const Template = () => {
  let { id } = useParams();

  return (
    <div>
      <h4>Producto {id}</h4>
    </div>
  );
};

const Productos = () => {
  let { path, url } = useRouteMatch();

  console.log(useRouteMatch());

  return (
    <div>
      <h3>Productos</h3>
      <ul>
        <li>
          <Link to={`${url}/a`} className="App-link">
            Producto a
          </Link>
        </li>
        <li>
          <Link to={`${url}/b`} className="App-link">
            Producto b
          </Link>
        </li>
        <li>
          <Link to={`${url}/c`} className="App-link">
            Producto c
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un Producto</h4>
        </Route>
        <Route path={`${path}/:id`} component={Template} />
      </Switch>
    </div>
  );
};

export default Productos;
