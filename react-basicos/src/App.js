import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> salva y recarga.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React
          </a>
        </section>
        <section>
          <Componente msg="Hola Mundo, soy un componente de React" />
          {/* <Componente></Componente> */}
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={false}
            arreglo={[1, 2, 3]}
            objeto={{ curso: "React", donde: "Escuela IT" }}
            funcion={num => num * num}
            elementoReact={<i>Elemento de React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como Prop" />
            }
          />
          {/* console.table(Propiedades) */}
          <Estado />
          <RenderizadoCondicional />
        </section>
      </header>
    </div>
  );
}

export default App;
