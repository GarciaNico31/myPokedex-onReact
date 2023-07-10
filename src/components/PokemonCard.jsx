import { PropTypes } from "prop-types";

const PokemonCard = ({ imgSrc, Name }) => {
  return (
    <div>
      <figure>
        {
          imgSrc != null ? <img src={imgSrc} alt={
            Name} /> : "???"}
      </figure>
      <figcaption>{
        Name}</figcaption>
    </div>
  );

};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    imgSrc: PropTypes.string,
    Name: PropTypes.isRequired,
  }).isRequired,
}

export default PokemonCard;
