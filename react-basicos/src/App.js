import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import Listas from "./components/Listas";
import Contador from "./components/Contador";
import Reloj from "./components/Reloj";
import Api from "./components/Api";
import ContadorHooks from "./components/ContadorHooks";
import RelojHooks from "./components/RelojHooks";
import ApiHooks from "./components/ApiHooks";

function App() {
  const [reloj, setReloj] = useState(true);

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
          <Listas />
          <hr />
        </section>
        <section>
          <h2>Eventos</h2>
          <Contador />
          <Contador titulo="Likes" />
        </section>
        <section>
          <hr />
          <h2>Ciclo de Vida de los Componentes</h2>
          {reloj ? <Reloj /> : null}
          <br />
          <br />
          <hr />
        </section>
        <section>
          <h2>Consumo de Datos</h2>
          <Api />
          <br />
          <hr />
        </section>
        <section>
          <h2>Hooks</h2>
          <ContadorHooks />
          {reloj ? <RelojHooks /> : null}
          <br />
          <button onClick={() => setReloj(!reloj)}>
            {reloj ? "Ocultar Relojes" : "Mostar Relojes"}
          </button>
          <ApiHooks />
        </section>
      </header>
    </div>
  );
}

export default App;
