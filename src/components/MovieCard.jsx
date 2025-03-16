import propTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ id, poster, title, aveRate }) {
  //movie component is receiving props from the parent component
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} />
      <p>
        <Link to={`/movie/${id}`}>{title}</Link>
      </p>
      <p>avg: {aveRate}</p>
    </div>
  );
}

MovieCard.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  aveRate: propTypes.number.isRequired,
};

export default MovieCard;
