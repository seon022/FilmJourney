import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ReviewItem = ({ review, onDelete }) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h6">{review.title}</Typography>
				<Typography variant="body1" color="textSecondary">
					Rating: {review.rating} ⭐
				</Typography>
				<Typography variant="body1">{review.content}</Typography>
				<Typography variant="body2" color="textSecondary">
					{review.watchedDate}
				</Typography>
				<button onClick={() => onDelete(review.id)}>Delete</button>
			</CardContent>
		</Card>
	);
};
export default ReviewItem;
