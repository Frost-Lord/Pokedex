import "../../components/SCSS/info.scss";
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
/* eslint-disable jsx-a11y/anchor-is-valid */
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
  console.log(pokemondocs);

  useEffect(() => {
    const url = window.location.pathname;
    const pokemon = url.split("/")[1];
    setPokemon(pokemon);
    getPokemon(pokemon);
  }, []);

  function editpage() {
    const textedit = document.getElementById("textedit");
    if (textedit) {
      textedit.contentEditable = "true";
      toast.warn("Editing activated!", toastOptions);

      const pokemoninfo: any = document.getElementsByClassName("pokemoninfo");
      pokemoninfo[0].style.width = "75%";
      for (let i = 0; i < pokemoninfo.length; i++) {
        pokemoninfo[i].style.backgroundColor = "#121212";
      }
    }
  }
  function savepage() {
    const textedit = document.getElementById("textedit");
    if (textedit) {
      textedit.contentEditable = "false";
      toast.success("Page saved!", toastOptions);


      const pokemoninfo: any = document.getElementsByClassName("pokemoninfo");
      if (pokemoninfo) {
        pokemoninfo[0].style.width = "60%";
        for (let i = 0; i < pokemoninfo.length; i++) {
          pokemoninfo[i].style.backgroundColor = "#000000";
        }
      }
    }
  }

  const URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemondocs.id}.png`
  return (
    <div className="App">
      <header className="App-header">


        <nav className="navbar">
          <div className="navbar-brand">
            <img src="https://i.ibb.co/NV53XXR/image-8.png" style={{ width: 340 }} alt="logo" />
          </div>
          <div className="navbar-menu">
            <a className="navbar-item" href="#">
              info
            </a>
            <a className="navbar-item" href="#">
              About
            </a>
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
        </nav>


        <a className="pokedextopbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" />
          <img src="https://i.ibb.co/zN2sB0t/pokeball-icons-noun-project-168545-removebg-preview.png" alt="pokemon" />
        </a>


        <div className="sidenavimg">
          <h1>Picture:</h1>
          <img src={URL} alt="pokemon" />
        </div>

        <br></br>

        <div className="sidenav">
          <h1>Common Info:</h1>
          <div>
            <FaBattleNet /> ID: #{pokemondocs.id}
          </div>
          <div>
            <FaTextHeight /> Height: {pokemondocs?.height}
          </div>
          <div>
            <FaWeight /> Weight: {pokemondocs?.weight}
          </div>
          <div>
            <FaStreetView /> Base Experience: {pokemondocs?.base_experience}
          </div>
          <h1>Options:</h1>
          <div>
            <FaEdit /> Edit Page: <button className="controllButton" onClick={(e) => {
              e.preventDefault();
              editpage();
            }}>Edit</button>
          </div>
          <div>
            <FaSave /> Save Page: <button className="controllButton" onClick={(e) => {
              e.preventDefault();
              savepage();
            }
            }>Save</button>
          </div>
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

              {pokemondocs?.game_indices?.map((game: { version: { name: String }; game_index: String }) => {
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
                    <button className="controllButton" onClick={(e) => {
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
