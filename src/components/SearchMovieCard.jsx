import React from "react";
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SearchMovieCard({ id, poster, title, releaseDate }) {
	return (
		<Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
			<CardActionArea component={Link} to={`/movie/${id}`}>
				<CardMedia
					component="img"
					height="300"
					image={
						poster
							? `https://image.tmdb.org/t/p/w300${poster}`
							: "/no-image.png"
					}
					alt={title}
				/>
				<CardContent>
					<Typography
						variant="subtitle1"
						component="div"
						noWrap
						sx={{ fontWeight: "bold" }}
					>
						{title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{releaseDate ? releaseDate.substring(0, 4) : "N/A"}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

SearchMovieCard.propTypes = {
	id: PropTypes.number.isRequired,
	poster: PropTypes.string,
	title: PropTypes.string.isRequired,
	releaseDate: PropTypes.string,
};

export default SearchMovieCard;
