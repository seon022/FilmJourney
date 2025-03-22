import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

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
        <div className="aveRate">
          <StarRateIcon fontSize="small" color="rating"></StarRateIcon>
          <p>{aveRate}</p>
        </div>
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
