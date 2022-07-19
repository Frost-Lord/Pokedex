import './info.scss'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

    const [pokename, setPokemon] = useState('');
    const [pokemondocs, setPokemonDocs] = useState([]);

    async function getPokemon(pokemon: String) {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(response.data);
        setPokemonDocs(response.data);
    }
    
    useEffect(() => {
        const url = window.location.pathname;
        const pokemon = url.split('/')[1];
        setPokemon(pokemon);
        getPokemon(pokemon);
      }, []);
    
    return (
    <div className="App">
      <header className="App-header">
        <a className="pokedextopbar">
          <h1>Pokedex</h1>
        </a>
        <br></br><br></br>

        <div className='pokemoninfo'>
            <div className='nametitle'>{pokename}</div>
            <br></br>
            <a className='pokemoninfo'>Height: {pokemondocs?.height}</a>
            <a className='pokemoninfo'>Weight: {pokemondocs?.weight}</a>
        </div>

      </header>
    </div>
  );
}

export default App;
