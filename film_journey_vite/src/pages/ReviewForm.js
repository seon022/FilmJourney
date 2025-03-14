import { useState } from "react";
import { addReview } from "../api/reviewService";
import { useParams } from "react-router-dom";

function ReviewForm() {
	const { id } = useParams();
	const [movieId, setMovieId] = useState(id);
	const [movieTitle, setMovieTitle] = useState("");
	const [reviewText, setReviewText] = useState("");
	const [rating, setRating] = useState(5);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userId = "7M03tdkoD19ICcaH0Jwv";
		const movieData = { id: movieId, title: movieTitle, poster_path: "" };

		try {
			console.log("click save button");
			await addReview(userId, movieData, rating, reviewText);
		} catch (error) {
			console.error("failed : ", error);
		}
	};

	return (
		<div>
			<h2>My review</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Movie Id : </label>
					<input type="text" value={movieId} />
				</div>
				<div>
					<label>Movie Title : </label>
					<input
						type="text"
						value={movieTitle}
						onChange={(e) => setMovieTitle(e.target.value)}
					/>
				</div>

				<div>
					<label>rating :</label>
					<input
						type="number"
						value={rating}
						onChange={(e) => setRating(Number(e.target.value))}
						min="1"
						max="10"
						required
					/>
				</div>
				<div>
					<label>review :</label>
					<textarea
						value={reviewText}
						onChange={(e) => setReviewText(e.target.value)}
						required
					/>
				</div>

				<button type="submit">save</button>
			</form>
		</div>
	);
}
export default ReviewForm;
