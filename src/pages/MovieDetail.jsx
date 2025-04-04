import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import StarRateIcon from "@mui/icons-material/StarRate";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useParams, useNavigate } from "react-router-dom";

import {
  fetchMovieDetail,
  fetchCast,
  fetchSimilarMovies,
} from "../api/tmdbApi.js";
import MovieCard from "../components/MovieCard";
import useMovieStore from "../store/movieStore";

function MovieDetail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const setMovie = useMovieStore((state) => state.setMovie);
  const setEditReview = useMovieStore((state) => state.setEditReview);

  const handleGoToReviewForm = () => {
    setMovie(detail);

    const existingReview = useMovieStore
      .getState()
      .reviews.find((review) => review.movieId === detail.id);

    if (existingReview) {
      setEditReview(existingReview);
    } else {
      setEditReview(null);
    }

    navigate(`/review/${id}`);
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
            <div className="rating">
              <StarRateIcon fontSize="small" color="rating"></StarRateIcon>
              <p> {detail.vote_average.toFixed(1)}</p>
            </div>
            <ul className="genre-list">
              {detail.genres.map((g) => (
                <li key={g.id}>{g.name}</li>
              ))}
            </ul>
            <div className="info-list">
              <div>
                <p className="cate">year</p>
                <p>{detail.release_date.slice(0, 4)}</p>
              </div>
              <div>
                <p className="cate">language</p>
                <p>{detail.original_language.toUpperCase()}</p>
              </div>
            </div>
            <div>
              <p className="sec-title">overview</p>
              <p>{detail.overview}</p>
            </div>
            <div>
              <p className="sec-title">Cast</p>
              <p>
                {cast.cast
                  .slice(0, 5)
                  .map((c) => c.name)
                  .join(", ")}
              </p>
            </div>
            <div>
              <p className="sec-title">Director</p>
              <ul>
                {cast.crew
                  .filter((c) => c.job === "Director")
                  .map((c) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="detail-card">
            <h3>Rivews</h3>
            <ul className="review-list">
              <li className="review-set">
                <Avatar alt="Remy Sharp" src="/assets/img-profile.jpg" />
                <div className="review-content">
                  <div className="review-header">
                    <p className="name">Name</p>
                    <StarRateIcon
                      fontSize="small"
                      color="rating"
                    ></StarRateIcon>
                  </div>
                  <p className="cont">this is a review</p>
                </div>
              </li>
              <Divider component="li" />
              <li className="review-set">
                <Avatar alt="Remy Sharp" src="/assets/img-profile.jpg" />
                <div className="review-content">
                  <div className="review-header">
                    <p className="name">Name</p>
                    <StarRateIcon
                      fontSize="small"
                      color="rating"
                    ></StarRateIcon>
                  </div>
                  <p className="cont">this is a review</p>
                </div>
              </li>
            </ul>
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
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: 90,
              right: "max(calc((100vw - 760px) / 2 + 20px), 20px)",
              zIndex: 1000,
            }}
            onClick={handleGoToReviewForm}
          >
            <AddIcon />
          </Fab>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
