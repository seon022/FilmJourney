import React, { useEffect } from "react";
import useMovieStore from "../store/movieStore";
import { Container, Typography } from "@mui/material";
import ReviewItem from "../components/review/ReviewItem";
import BackHeader from "../components/BackHeader";

const ReviewPage = () => {
	const reviews = useMovieStore((state) => state.reviews);
	const fetchReviews = useMovieStore((state) => state.fetchReviews);
	const deleteReview = useMovieStore((state) => state.deleteReview);

	useEffect(() => {
		fetchReviews();
	}, []);
	return (
		<Container>
			<BackHeader text="My Review" />

			{reviews.length > 0 ? (
				reviews.map((review) => (
					<ReviewItem key={review.id} review={review} onDelete={deleteReview} />
				))
			) : (
				<Typography variant="body1" color="gray">
					No reviews yet.
				</Typography>
			)}
		</Container>
	);
};
export default ReviewPage;
