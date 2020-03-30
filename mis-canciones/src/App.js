import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Header from "./components/Header";
import Cancion from "./pages/Cancion";
import Error404 from "./pages/Error404";
import Buscador from "./components/Buscador";
import Letra from "./components/Letra";
import ListaCanciones from "./components/ListaCanciones";
import Loader from "./components/Loader";
import { Alert, AlertTitle } from "@material-ui/lab";

function App() {
  //Variables de Estado
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [],
    searchInit = {
      artist: "",
      song: "",
      request: false
    };

  const [mySongs, setMySongs] = useState(mySongsInit);
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState({});
  const [error, setError] = useState(false);

  //Función de Efecto
  useEffect(() => {
    localStorage.setItem("mySongs", JSON.stringify(mySongs));

    const getData = async () => {
      const { artist, song } = search;

      try {
        let artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
          songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
          artistRes = await fetch(artistAPI),
          songRes = await fetch(songAPI),
          artistJSON = await artistRes.json(),
          songJSON = await songRes.json();

        console.log(artistJSON, songJSON);

        setCurrentSong({
          artist: artistJSON.artists[0].strArtist,
          avatar: artistJSON.artists[0].strArtistThumb,
          song,
          lyrics: songJSON.lyrics
        });
      } catch (error) {
        console.log(error);
        setSearch({
          artist,
          song,
          request: false
        });

        setError(true);
      }
    };

    if (!search.request) {
      return;
    } else {
      getData();
    }
  }, [search]);

  return (
    <Router>
      <HashRouter basename="/">
        <CssBaseline>
          <div className="App">
            <Header />
            <main className="App-main">
              <Switch>
                <Route exact path="/">
                  <Buscador
                    search={search}
                    setSearch={setSearch}
                    setError={setError}
                  />
                  {!search.request ? (
                    error ? (
                      <Alert
                        severity="error"
                        style={{ maxWidth: 752, margin: "2rem auto 0" }}
                      >
                        <AlertTitle>Error</AlertTitle>
                        Hubo problemas al consultar:
                        <ul>
                          <li>
                            El Artista: <b>{search.artist}</b> o
                          </li>
                          <li>
                            La Canción: <b>{search.song}</b>
                          </li>
                        </ul>
                      </Alert>
                    ) : (
                      <ListaCanciones
                        mySongs={mySongs}
                        setMySongs={setMySongs}
                      />
                    )
                  ) : Object.keys(currentSong).length === 0 ? (
                    <Loader />
                  ) : (
                    <Letra
                      currentSong={currentSong}
                      setCurrentSong={setCurrentSong}
                      mySongs={mySongs}
                      setMySongs={setMySongs}
                      setSearch={setSearch}
                    />
                  )}
                </Route>
                <Route
                  path="/cancion/:id"
                  children={<Cancion mySongs={mySongs} />}
                />
                <Route path="*" component={Error404} />
              </Switch>
            </main>
          </div>
        </CssBaseline>
      </HashRouter>
    </Router>
  );
}

export default App;
