import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const ApiHooks = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then(res => res.json())
      .then(json => {
        //console.log(json);
        json.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(json => {
              console.log(json);
              let pokemon = {
                id: json.id * -1,
                name: json.name,
                avatar: json.sprites.front_default
              };

              setPokemons(pokemons => [...pokemons, pokemon]);
            });
        });
      });
  }, []);

  return (
    <div>
      {pokemons.map(pokemon => (
        <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />
      ))}
    </div>
  );
};

export default ApiHooks;
