import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  fetchMovieDetail,
  fetchCast,
  fetchSimilarMovies,
} from "../api/tmdbApi.js";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import MovieCard from "../components/MovieCard";

function MovieDetail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  const handleGoToReviewForm = () => {
    // ReviewForm 페이지로 이동 (영화 ID를 URL 파라미터로 넘길 수 있음음)
    navigate(`/movie/${id}/review`);
  };
  const getDetail = async () => {
    setLoading(true);
    fetchMovieDetail(id);
    setDetail(await fetchMovieDetail(id));
    fetchCast(id);
    setCast(await fetchCast(id));
    fetchSimilarMovies(id);
    setSimilar(await fetchSimilarMovies(id));
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="cont-wrapper">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="detail-container">
          <img
            src={`https://image.tmdb.org/t/p/w400${detail.poster_path}`}
            alt={detail.title}
            className="movie-img"
          />
          <div className="detail-card movie-info">
            <h1 className="title">{detail.title}</h1>
            <div>
              <StarRateIcon fontSize="small" color="rating"></StarRateIcon>
              <p> {detail.vote_average.toFixed(1)}</p>
            </div>
            <ul>
              {detail.genres.map((g) => (
                <li key={g.id}>{g.name}</li>
              ))}
            </ul>
            <p>year : {detail.release_date.slice(0, 4)}</p>
            <p>language : {detail.original_language.toUpperCase()}</p>
            <p>overview : {detail.overview}</p>
            <ul>
              <li>Cast :</li>
              {cast.cast.map((c) => (
                <li key={c.id}>{c.name}</li>
              ))}
            </ul>
            <ul>
              <li>Director :</li>
              {cast.crew
                .filter((c) => c.job === "Director")
                .map((c) => (
                  <li key={c.id}>{c.name}</li>
                ))}
            </ul>
          </div>
          <div className="detail-card">
            <h3>Reviews</h3>
          </div>
          <div className="detail-card">
            <h3>Similar Movies</h3>
            <section className="movie-set">
              <div className="set-list">
                {similar.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    aveRate={movie.vote_average.toFixed(1)}
                  />
                ))}
              </div>
            </section>
          </div>
          <Button
            variant="contained"
            onClick={handleGoToReviewForm}
            className="write-review-btn"
          >
            <AddIcon></AddIcon>
          </Button>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
