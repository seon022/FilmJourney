import React from "react";
import { Card, CardContent, Typography, IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { fontSize } from "@mui/system";

const ReviewItem = ({ review, onDelete, onEdit }) => {
	// reviewText를 100자까지 잘라 보여주는 함수
	const truncateText = (text, maxLength = 100) => {
		if (!text) return "";
		return text.length > maxLength
			? text.substring(0, maxLength) + "..."
			: text;
	};

	return (
		<Card
			sx={{
				display: "flex",
				alignItems: "center",
				marginBottom: 2,
				padding: "0 4px",
			}}
		>
			<CardContent sx={{ flex: 1 }}>
				<Typography
					variant="h6"
					gutterBottom
					sx={{ display: "flex", alignItems: "center" }}
				>
					{review.movieTitle}{" "}
					<Box sx={{ marginLeft: "10px", fontSize: "0.9rem" }}>
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
				<IconButton color="secondary" onClick={() => onEdit(review.id)}>
					<EditIcon />
				</IconButton>
				<IconButton color="primary" onClick={() => onDelete(review.id)}>
					<DeleteIcon />
				</IconButton>
			</Box>
		</Card>
	);
};

export default ReviewItem;
