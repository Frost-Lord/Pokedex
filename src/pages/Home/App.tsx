import "./App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { PList } from "../../api/routes";
import swal from 'sweetalert';

function App() {
  const [PokemonList, setPokemon] = useState([]);

  async function delPokemon(pokemon: String) {
    swal({
      title: "Are you sure?",
      text: `Once deleted, you will not be able to recover ${pokemon}!`,
      icon: "warning",
      dangerMode: true,
      buttons: ["No", "Yes"],
    })
    .then((value) => {
      if(value == true) {
        swal(`Poof! Your ${pokemon} has been deleted!`, {
          icon: "success",
        });
      } else {
        swal(`Your ${pokemon} is safe!`, {
          icon: "info",
        });
      }
    });
  }

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
              delPokemon(pokemon.name);
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon" />
          <img src="https://i.ibb.co/zN2sB0t/pokeball-icons-noun-project-168545-removebg-preview.png" alt="pokemon" />
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
