import "./info.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaBattleNet,
  FaStreetView,
  FaWeight,
  FaTextHeight,
  FaGitlab,
  FaGitkraken,
  FaProjectDiagram,
  FaEthernet,
  FaDeezer,
  FaAudible,
} from "react-icons/fa";

function App() {
  const [pokename, setPokemon] = useState("");
  const [pokemondocs, setPokemonDocs]: any = useState([]);

  async function getPokemon(pokemon: String) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    console.log(response.data);
    setPokemonDocs(response.data);
  }

  useEffect(() => {
    const url = window.location.pathname;
    const pokemon = url.split("/")[1];
    setPokemon(pokemon);
    getPokemon(pokemon);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="sidenav">
          <br></br>
          <br></br>
          <h1>Common Info:</h1>
          <a>
            <FaBattleNet /> ID: #{pokemondocs.id}
          </a>
          <a>
            <FaTextHeight /> Height: {pokemondocs?.height}
          </a>
          <a>
            <FaWeight /> Weight: {pokemondocs?.weight}
          </a>
          <a>
            <FaStreetView /> Base Experience: {pokemondocs?.base_experience}
          </a>
        </div>

        <div className="pokemoninfo">
          <div className="nametitle">{pokename}</div>
          <br></br>
          <a className="pokemoninfo">
          <FaAudible /> Abilities:{" "}
            <a className="infotext">
              <br></br>
              {pokemondocs?.abilities?.map(
                (ability: { ability: { name: String } }) =>
                  ability.ability.name + ", "
              )}
            </a>
          </a>
          <br></br>
          <br></br>
          <a className="pokemoninfo">
          <FaGitlab /> Types:{" "}
            <a className="infotext">
              <br></br>
              {pokemondocs?.types?.map(
                (type: { type: { name: String } }) => type.type.name + ", "
              )}
            </a>
          </a>
          <br></br>
          <br></br>
          <a className="pokemoninfo">
          <FaDeezer /> Stats:{" "}
            <a className="infotext">
              <br></br>
              {pokemondocs?.stats?.map(
                (stat: { base_stat: number; stat: { name: String } }) =>
                  stat.stat.name + " " + stat.base_stat + ", "
              )}
            </a>
          </a>
          <br></br>
          <br></br>
          <a className="pokemoninfo">
          <FaGitkraken /> Species:{" "}
          <a className="infotext">
            <br></br>
            {pokemondocs?.species?.name}
          </a>
        </a>
        <br></br>
        <br></br>

          <a className="pokemoninfo">
          <FaEthernet /> Game Index:{" "}
            <a className="infotext">
              <br></br>
              {pokemondocs?.game_indices?.map(
                (game: { version: any; game_index: String }) =>
                  "Index: " +
                  game.game_index +
                  " Name: " +
                  game.version.name +
                  ", "
              )}
            </a>
          </a>
          <br></br>
          <br></br>
        <a className="pokemoninfo">
        <FaProjectDiagram /> Moves:{" "}
            <a className="infotext">
              <br></br>
              {pokemondocs?.moves?.map(
                (move: { move: { name: String } }) => move.move.name + ", "
              )}
            </a>
          </a>
          <br></br>
          <br></br>
          </div>

          <div className="edit">
               
          </div>
      </header>
    </div>
  );
}

export default App;
