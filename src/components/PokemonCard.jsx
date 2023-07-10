const PokemonCard = (pokemon) => {
  console.log(pokemon);
  return (
    <div>
      <figure>
        {pokemon.imgSrc != null ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : "???"}
      </figure>
      <figcaption>{pokemon.name}</figcaption>
    </div>
  );

};

export default PokemonCard;
