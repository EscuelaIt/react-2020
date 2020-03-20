import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  //console.log(props);
  return (
    <div>
      <hr />
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadero" : "Falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.curso + " - " + props.objeto.donde}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
      <hr />
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las Props de React"
};

Propiedades.propTypes = {
  numero: PropTypes.number.isRequired
};
