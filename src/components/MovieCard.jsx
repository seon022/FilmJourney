import StarRateIcon from '@mui/icons-material/StarRate';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Bookmark from './Bookmark';

function MovieCard({ id, poster, title, aveRate, userId }) {
  //movie component is receiving props from the parent component
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <div>
        <div className="poster-container">
          <Bookmark
            userId={userId} // userId가 문자열인지 확인!
            movie={{
              id: id, // id가 숫자인지 확인!
              title: title,
              poster: poster,
            }}
          />
          <img src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} className="poster" />
        </div>
        <p className="title">{title}</p>
        {aveRate !== undefined ? (
          <div className="aveRate">
            <StarRateIcon fontSize="small" color="rating"></StarRateIcon>
            <p>{aveRate}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
}

MovieCard.propTypes = {
  id: propTypes.number.isRequired,
  poster: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  aveRate: propTypes.number.isRequired,
  userId: propTypes.string.isRequired,
};

export default MovieCard;
