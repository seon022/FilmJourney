import React from "react";
import useMovieStore from "../store/movieStore";

const ReviewPage = () => {
	const reviews = useMovieStore((state) => state.reviews);
	const deleteReview = useMovieStore((state) => state.deleteReview);

	return (
		<div>
			<h2>Review List</h2>
			<ul>
				{reviews.map((review) => (
					<li key={review.id}>
						<h3>{review.movieTitle}</h3>
						<p>Rating: {review.rating}</p>
						<p>{review.reviewText}</p>
						<button onClick={() => deleteReview(review.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};
export default ReviewPage;
