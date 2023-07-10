import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handleClickPrec = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      <PokemonCard imgSrc={pokemon.imgSrc} Name={pokemon.name} />

      {pokemonIndex > 0 ? <button onClick={handleClickPrec}>Précedent</button> : (null)}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickNext}>Suivant</button> : (null)}
      
    </div>
  );
}

export default App;
