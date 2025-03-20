import propTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieCard({ id, poster, title, aveRate }) {
  //movie component is receiving props from the parent component
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={title}
          className="poster"
        />
        <p className="title">{title}</p>
        <p className="aveRate">avg: {aveRate}</p>
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  aveRate: propTypes.number.isRequired,
};

export default MovieCard;
