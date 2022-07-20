import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { PList } from "../../api/routes";

function App() {
  const [PokemonList, setPokemon] = useState([]);

  async function getPokemon() {
    const response = await axios.get(PList);

    let lineNumber = 1;
    const mappedData: any = response.data.results?.map(
      (pokemon: { name: string }) => {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${lineNumber++}.png`;

        return (
          <div className="pokemon">
            <a className="pokemonname">{pokemon.name}</a>
            <img src={url}></img>
            <br></br>
            <br></br>
            <button className="deletebutton" onClick={(e) => {
              e.preventDefault();
              window.location.href = `${pokemon.name}/delete`;
            }}>Delete</button>
            <button
              className="infobutton"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `${pokemon.name}/detailed`;
              }}
            >
              Edit
            </button>
          </div>
        );
      }
    );
    setPokemon(mappedData);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a className="pokedextopbar">
          <h1>Pokedex</h1>
        </a>
        <br></br>
        <br></br>
        <h1>List of the top 50 pokemon</h1>
        <br></br>
        <div className="card-columns">
          <div className="pokemonlist">{PokemonList}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
