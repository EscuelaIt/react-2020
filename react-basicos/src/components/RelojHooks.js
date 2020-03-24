import React, { useState, useEffect } from "react";

const RelojHooks = props => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (active) {
      timer = setInterval(() => {
        setDate(new Date().toLocaleTimeString());
      }, 1000);
    }
    console.log(
      "El Hook useEffect se ejecuta, por que el estado o sus propiedades del componente ha cambiado"
    );

    return () => clearInterval(timer);
  }, [date, active]);

  const tictac = value => {
    setActive(value);
  };

  return (
    <>
      <p>Reloj Hooks</p>
      <div>{date}</div>
      <button onClick={() => tictac(true)}>iniciar</button>
      <button onClick={() => tictac(false)}>detener</button>
    </>
  );
};

export default RelojHooks;
