import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RuteoBasico } from "./components/RuteoBasico";
import RuteoPorParametros from "./components/RuteoPorParametros";
import RuteoAnidado from "./components/RuteoAnidado";
import Redirecciones from "./components/Redirecciones";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Manejo de Rutas</h1>
        {/* <RuteoBasico /> */}
        {/* <RuteoPorParametros /> */}
        {/* <RuteoAnidado /> */}
        <Redirecciones />
      </header>
    </div>
  );
}

export default App;
