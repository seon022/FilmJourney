import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import StarRateIcon from "@mui/icons-material/StarRate";
import Fab from "@mui/material/Fab";
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
							{cast.cast.slice(0, 5).map((c) => (
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
