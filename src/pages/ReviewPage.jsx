import React, { useEffect } from "react";

import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import BackHeader from "../components/BackHeader";
import ReviewItem from "../components/review/ReviewItem";
import useMovieStore from "../store/movieStore";
import MovieCalendar from "../components/review/MovieCalendar";

const ReviewPage = () => {
	const navigate = useNavigate();
	const reviews = useMovieStore((state) => state.reviews);
	const fetchReviews = useMovieStore((state) => state.fetchReviews);
	const deleteReview = useMovieStore((state) => state.deleteReview);
	const setEditReview = useMovieStore((state) => state.setEditReview);

	useEffect(() => {
		fetchReviews();
	}, []);

	const handleEdit = (review) => {
		setEditReview(review);
		navigate(`/review/${review.movieId}`);
	};

	return (
		<div>
			<BackHeader text="My Review" />
			<Container>
				<MovieCalendar />
				<Typography
					variant="h5"
					color="secondary"
					gutterBottom
					sx={{ fontSize: "1.4rem", mb: 2 }}
				>
					Reviews
				</Typography>
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<ReviewItem
							key={review.id}
							review={review}
							onDelete={deleteReview}
							onEdit={() => handleEdit(review)}
						/>
					))
				) : (
					<Typography variant="body1" color="gray">
						No reviews yet.
					</Typography>
				)}
			</Container>
		</div>
	);
};
export default ReviewPage;
