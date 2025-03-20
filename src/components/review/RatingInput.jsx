import { Box, Typography, Rating } from "@mui/material";

function RatingInput({ rating, setRating }) {
	return (
		<Box
			component="section"
			sx={{
				p: 2,
				border: "1px solid lightgrey",
				borderRadius: "4px",
				backgroundColor: "white",
				transition: "border-color 0.3s",
				"&:hover": { borderColor: "black" },
			}}
		>
			<Typography variant="body1">Rating</Typography>
			<Rating
				value={rating}
				precision={0.5}
				onChange={(event, newValue) => {
					if (newValue >= 0.5) {
						setRating(newValue);
					}
				}}
			/>
		</Box>
	);
}

export default RatingInput;
