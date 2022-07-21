import "../../components/SCSS/App.scss";
import "../../components/SCSS/common.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { PList } from "../../api/routes";
import swal from "sweetalert";
/* eslint-disable jsx-a11y/anchor-is-valid */
function Index() {
  const [PokemonList, setPokemon] = useState([]);

  async function delPokemon(pokemon: String) {
    swal({
      title: "Are you sure?",
      text: `Once deleted, you will not be able to recover ${pokemon}!`,
      icon: "warning",
      dangerMode: true,
      buttons: ["No", "Yes"],
    }).then((value) => {
      if (value === true) {
        swal(`Poof! Your ${pokemon} has been deleted!`, {
          icon: "success",
        });

        const card: String | HTMLElement | null = document.getElementById(
          `${pokemon}`
        );
        if (card) {
          card.remove();
        }
      } else {
        swal(`Your ${pokemon} is safe!`, {
          icon: "info",
        });
      }
    });
  }

  useEffect(() => {
    async function getPokemon() {
      const response = await axios.get(PList);

      let lineNumber = 1;
      const mappedData = response.data.results?.map(
        (pokemon: { name: string }) => {
          const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${lineNumber++}.png`;
          let redirect = `${pokemon.name}/detailed`;
          return (
            <li>
              <div className="card" id={pokemon.name}>
              <a href={redirect}>
                <div className="card-image">
                  <img src={url} alt="pokemonimg"></img>
                </div>
                <div className="card-theme">
                  <a href={redirect}>{pokemon.name}</a>
                </div>
              </a>
                <button
                  className="deletebutton"
                  onClick={(e) => {
                    e.preventDefault();
                    delPokemon(pokemon.name);
                  }}
                >
                  Delete
                </button>
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
            </li>
          );
        }
      );
      setPokemon(mappedData);
    }
    getPokemon();
  }, []);

  return (
    <div className="Index">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">
            <img
              src="https://i.ibb.co/NV53XXR/image-8.png"
              style={{ width: 340 }}
              alt="logo"
            />
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon"
          />
          <img
            src="https://i.ibb.co/zN2sB0t/pokeball-icons-noun-project-168545-removebg-preview.png"
            alt="pokemon"
          />
        </a>
        <h1>List of the top 50 pokemon</h1>
        <ul className="card-container">{PokemonList}</ul>
      </header>
    </div>
  );
}

export default Index;
