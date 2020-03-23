import React, { useState } from "react";

const ContadorHooks = props => {
  const [cuenta, setCuenta] = useState(0);

  const sumar = () => {
    setCuenta(cuenta + 1);
  };

  const restar = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <p>Contador de {props.titulo}</p>
      <p>
        <b>{cuenta}</b>
      </p>
      <p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </p>
    </div>
  );
};

ContadorHooks.defaultProps = {
  titulo: "Clicks"
};

export default ContadorHooks;
