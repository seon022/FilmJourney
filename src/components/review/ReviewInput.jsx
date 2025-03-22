import { TextField } from "@mui/material";

function ReviewInput({ reviewText, setReviewText }) {
	return (
		<TextField
			label="Write your review here (optional)"
			multiline
			fullWidth
			rows={3}
			value={reviewText}
			onChange={(e) => setReviewText(e.target.value)}
			sx={{ backgroundColor: "white" }}
		/>
	);
}

export default ReviewInput;
