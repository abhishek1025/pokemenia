
import { useEffect, useState } from 'react';
import './App.scss';

import ScoreCard from './components/score-card-component/score-card.component';

import CardWrapper from './components/cards/all-cards.component';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [shuffeledPokemons, setShuffeledPokemons] = useState([])
  const [clickedPokemonsIDs, setClickedPokemonsIDs] = useState([])

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const getData = async () => {
      let getPokemons = await fetchPokemon();
      setPokemons(getPokemons);
      setShuffeledPokemons(getPokemons);
    }

    getData()
  }, [])

  const changeHandeler = (e) => {
    const element = e.target
    const parentDiv = element.closest('.pokemon-card')
    setShuffeledPokemons(shuffleArray([...shuffeledPokemons]))
    checkForClickedPokemon(Number(parentDiv.id))

  }

  const resetGame = () => {
    setShuffeledPokemons([...pokemons])
    setClickedPokemonsIDs([])
  }

  const checkForClickedPokemon = (pokemonID) => {

    if (clickedPokemonsIDs.includes(pokemonID)) {
      setTimeout(resetGame, 1000);
      setCurrentScore(0);
    }
    else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore)

      if (newScore > bestScore) {
        setBestScore(newScore)
      }

      setClickedPokemonsIDs([...clickedPokemonsIDs, pokemonID])
    }
  }

  const fetchPokemon = async () => {

    let n = Math.floor(Math.random() * 100 + 1)

    const pokemons = []

    for (let i = n; i < n + 12; i++) {
      const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)

      const pokemonInfo = await reponse.json()
      const id = pokemonInfo.id;
      const name = pokemonInfo.forms[0].name;
      const img = pokemonInfo.sprites.other.dream_world.front_default;

      pokemons.push({ id, name, img })
    }

    return pokemons;

  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }



  return (
    <div className="App">

      <div className='game-title-wrapper'>
        <h1 className='game-heading'>PokeMania: Test your memory</h1>
        <p>Note: Get points by clicking on an image but don't click on any image more than once!</p>
      </div>

      <ScoreCard currentScore={currentScore} bestScore={bestScore} />

      <CardWrapper changeHandeler={changeHandeler} shuffeledPokemons={shuffeledPokemons} />

    </div>
  );
}

export default App;
