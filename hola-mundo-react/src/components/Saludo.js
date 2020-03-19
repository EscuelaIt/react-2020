import React from "react";
import "../App.scss";

const Saludo = props => {
  console.log(props);
  return (
    <div>
      <h2>{props.mensaje}</h2>
      <hr />
    </div>
  );
};

export default Saludo;
