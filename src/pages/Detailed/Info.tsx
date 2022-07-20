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
  FaEdit,
  FaSave,
  FaAudible,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const toastOptions: any = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [pokename, setPokemon] = useState("");
  const [pokemondocs, setPokemonDocs]: any = useState([]);

  async function getPokemon(pokemon: String) {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    setPokemonDocs(response.data);
  }

  useEffect(() => {
    const url = window.location.pathname;
    const pokemon = url.split("/")[1];
    setPokemon(pokemon);
    getPokemon(pokemon);
  }, []);

  function editpage() {
    const textedit: any = document.getElementById("textedit");
    textedit.contentEditable = "true";
    toast.warn("Editing activated!", toastOptions);

    const pokemoninfo: any = document.getElementsByClassName("pokemoninfo");
    pokemoninfo[0].style.width = "75%";
    for (let i = 0; i < pokemoninfo.length; i++) {
      pokemoninfo[i].style.backgroundColor = "#121212";
    }

  }
  function savepage() {
    const textedit: any = document.getElementById("textedit");
    textedit.contentEditable = "false";
    toast.success("Page saved!", toastOptions);

    const pokemoninfo: any = document.getElementsByClassName("pokemoninfo");
    pokemoninfo[0].style.width = "60%";
    for (let i = 0; i < pokemoninfo.length; i++) {
      pokemoninfo[i].style.backgroundColor = "#0b0a15";
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <a className="pokedextopbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" />
          <img src="https://i.ibb.co/zN2sB0t/pokeball-icons-noun-project-168545-removebg-preview.png" alt="pokemon" />
        </a>


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
          <h1>Options:</h1>
          <a>
            <FaEdit /> Edit Page: <button className="controllButton" onClick={(e) => {
                e.preventDefault();
                editpage();
              }}>Edit</button>
          </a>
          <a>
            <FaSave /> Save Page: <button className="controllButton" onClick={(e) => {
                e.preventDefault();
                savepage();
              }
              }>Save</button>
          </a>
        </div>

        <div className="pokemoninfo" id="textedit">
          <div className="nametitle">{pokename}</div>
          <br></br>
          <a className="pokemoninfo">
          <FaAudible /> Abilities:{" "}
            <a className="infotext" >
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
            <a className="infotext" >
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
            <a className="infotext" >
              <br></br>
              {pokemondocs?.stats?.map((stat: { base_stat: number; stat: { name: String } }) => {
                return (
                  <div>
                    <a>{stat.stat.name}: </a>
                    <a>{stat.base_stat}</a>
                  </div>
                );
              })}
            </a>
          </a>
          <br></br>
          <br></br>
          <a className="pokemoninfo">
          <FaGitkraken /> Species:{" "}
          <a className="infotext" >
            <br></br>
            {pokemondocs?.species?.name}
          </a>
        </a>
        <br></br>
        <br></br>

          <a className="pokemoninfo">
          <FaEthernet /> Game Index:{" "}
            <a className="infotext" >
              <br></br>
               {pokemondocs?.game_indices?.map((game: { version: any; game_index: String }) => {
                return (
                  <div>
                    <a>{game.version.name}: </a>
                    <a>{game.game_index}</a>
                  </div>
                );
               }
                )}
            </a>
          </a>
          <br></br>
          <br></br>
        <a className="pokemoninfo">
        <FaProjectDiagram /> Moves:{" "}
            <a className="infotext" >
              <br></br>

              {pokemondocs?.moves?.map((move: { move: { name: String; url: String } }) => {
                return (
                  <div>
                    <a>{move.move.name} = </a>
                    <button className="controllButton"  onClick={(e) => {
                e.preventDefault();
                window.location.href = `${move.move.url}`;
              }}> <a>Link</a></button>
                  </div>
                );
              })}
            </a>
          </a>
          <br></br>
          <br></br>
          </div>
          <ToastContainer />
      </header>
    </div>
  );
}

export default App;
