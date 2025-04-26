import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReviewItem = ({ review, onDelete, onEdit }) => {
	const navigate = useNavigate();

	const truncateText = (text, maxLength = 100) => {
		if (!text) return "";
		return text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	const handleViewMovieDetails = () => {
		navigate(`/movie/${review.movieId}`);
	};

	return (
		<Card
			sx={{
				display: "flex",
				alignItems: "center",
				marginBottom: 2,
			}}
		>
			<Box
				sx={{
					width: {
						xs: "30%",
						sm: "30%",
						md: "20%",
					},
				}}
			>
				<img
					src={`https://image.tmdb.org/t/p/w200${review.posterPath}`}
					alt={review.movieTitle}
					style={{
						width: "100%",
						height: "auto",
						objectFit: "cover",
						marginRight: 16,
					}}
				/>
			</Box>

			<CardContent sx={{ flex: 1 }}>
				<Typography
					variant="h6"
					gutterBottom
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						fontSize: "1.1rem",
						alignItems: { xs: "flex-start", sm: "center" },
					}}
					onClick={handleViewMovieDetails}
				>
					{review.movieTitle}
					<Box
						sx={{
							marginLeft: { sm: "10px", xs: 0 },
							fontSize: "0.9rem",
							marginTop: { xs: "8px", sm: 0 },
						}}
					>
						⭐{review.rating}
					</Box>
				</Typography>

				<Typography variant="body1">{review.content}</Typography>
				{review.reviewText && (
					<Typography variant="body1" gutterBottom>
						{truncateText(review.reviewText)}
					</Typography>
				)}
				<Typography variant="body2" color="secondary">
					Watched on: {review.watchedDate}
				</Typography>
			</CardContent>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					paddingRight: 1,
				}}
			>
				{/* <IconButton color="inherit" onClick={handleViewMovieDetails}>
					<MovieIcon
						sx={{
							fontSize: { xs: "20px", sm: "24px" },
						}}
					/>
				</IconButton> */}
				<IconButton color="secondary" onClick={() => onEdit(review.id)}>
					<EditIcon
						sx={{
							fontSize: { xs: "20px", sm: "24px" },
						}}
					/>
				</IconButton>
				<IconButton color="primary" onClick={() => onDelete(review.id)}>
					<DeleteIcon
						sx={{
							fontSize: { xs: "20px", sm: "24px" },
						}}
					/>
				</IconButton>
			</Box>
		</Card>
	);
};

export default ReviewItem;
