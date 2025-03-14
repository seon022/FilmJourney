import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const movie = {
	title: "micky17",
	poster_path: "urlurl",
	overview:
		"A brief description of another movie. You can leave a review here too.",
};
const MovieCard = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<img src={movie.poster_path} alt={movie.title} width="100%" />
			<CardContent>
				<Typography variant="h5" component="div">
					{movie.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{movie.overview}
				</Typography>
				<Button variant="contained" color="primary">
					View Details
				</Button>
			</CardContent>
		</Card>
	);
};

export default MovieCard;
