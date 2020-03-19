import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/Saludo.js";

function App() {
  const [estado, setEstado] = useState(0);
  return (
    <div className="App">
      <Saludo mensaje="Hola Escuela IT" />
      <Saludo mensaje="Hola desde México, quedense en su casa "></Saludo>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> slava y recarga.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
