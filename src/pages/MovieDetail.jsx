import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMovieDetail } from "../api/tmdbApi.js";

function MovieDetail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
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
    setLoading(false);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${detail.poster_path}`}
            alt={detail.title}
          />
          <h1>title : {detail.title}</h1>
          <p>rate : {detail.vote_average}</p>
          <ul>
            {detail.genres.map((g) => (
              <li key={g.id}>{g.name}</li>
            ))}
          </ul>
          <p>year : {detail.release_date.slice(0, 4)}</p>
          <p>language : {detail.original_language.toUpperCase()}</p>
          <p>overview : {detail.overview}</p>
          <button onClick={handleGoToReviewForm}>Go to Review Form</button>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
