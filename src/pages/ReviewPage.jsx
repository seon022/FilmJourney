import React, { useEffect, useState, useRef } from "react";

import { Container, Typography, Box } from "@mui/material";
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

	const [selectedDate, setSelectedDate] = useState(null);
	const [filteredReviews, setFilteredReviews] = useState([]);

	useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	const handleEdit = (review) => {
		setEditReview(review);
		navigate(`/review/${review.movieId}`);
	};

	const handleDateClick = (date) => {
		const halfWindowHeight = window.innerHeight / 2;
		window.scrollBy({
			top: halfWindowHeight,
			behavior: "smooth",
		});

		setSelectedDate(date);

		const filtered = reviews.filter((review) => {
			return review.watchedDate === date;
		});
		setFilteredReviews(filtered);
	};

	return (
		<div>
			<BackHeader text="My Review" />
			<Container>
				<MovieCalendar onDateClick={handleDateClick} />
				<Typography
					variant="h5"
					color="secondary"
					gutterBottom
					sx={{ fontSize: "1.4rem", mb: 2 }}
				>
					{filteredReviews.length > 0
						? "Review " + selectedDate
						: "Review List"}
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						paddingBottom: "20vw",
					}}
				>
					{filteredReviews.length > 0
						? filteredReviews.map((review) => (
								<ReviewItem
									key={review.id}
									review={review}
									onDelete={deleteReview}
									onEdit={() => handleEdit(review)}
								/>
						  ))
						: reviews.map((review) => (
								<ReviewItem
									key={review.id}
									review={review}
									onDelete={deleteReview}
									onEdit={() => handleEdit(review)}
								/>
						  ))}
				</Box>
			</Container>
		</div>
	);
};

export default ReviewPage;
