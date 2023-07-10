import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    Name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    Name: "mew",
  },
];

function App() {
  const pokemon = pokemonList[0];

  return (
    <div>
      <PokemonCard imgSrc={pokemon.imgSrc} Name={pokemon.Name}/>
    </div>
  );
}

export default App;
