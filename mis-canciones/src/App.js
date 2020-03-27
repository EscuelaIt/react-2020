import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Header from "./components/Header";
import Cancion from "./pages/Cancion";
import Error404 from "./pages/Error404";
import Buscador from "./components/Buscador";

function App() {
  //Variables de Estado
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")),
    searchInit = {
      artist: "",
      song: "",
      request: false
    };

  const [mySongs, setMySongs] = useState(mySongsInit);
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState({});
  const [error, setError] = useState(false);

  return (
    <Router>
      <CssBaseline>
        <div className="App">
          <Header />
          <main className="App-main">
            <Switch>
              <Route exact path="/">
                <Buscador />
                <h2>Home</h2>
              </Route>
              <Route path="/cancion/:id" children={<Cancion />} />
              <Route path="*" component={Error404} />
            </Switch>
          </main>
        </div>
      </CssBaseline>
    </Router>
  );
}

export default App;
