import React from "react";
import { useLocation, Link } from "react-router-dom";

const Error404 = () => {
  let url = useLocation();
  //console.log(url);

  return (
    <div>
      <h3>Error404</h3>
      <p>
        URL: <b>{url.pathname}</b> no encontrada
      </p>
      <p>
        Regresa al{" "}
        <Link to="/" className="App-link">
          Home
        </Link>
      </p>
    </div>
  );
};

export default Error404;
