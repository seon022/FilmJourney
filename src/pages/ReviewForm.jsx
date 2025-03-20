import { useState } from "react";
import { addReview } from "../api/reviewService";
import { useParams } from "react-router-dom";
import BackHeader from "../components/BackHeader";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import RatingInput from "../components/review/RatingInput";
import DateInput from "../components/review/DateInput";
import ReviewInput from "../components/review/ReviewInput";
import dayjs from "dayjs";

function ReviewForm() {
	const { id } = useParams();
	const [reviewText, setReviewText] = useState("");
	const [rating, setRating] = useState(5);
	const [watchedDate, setWatchedDate] = useState(dayjs());
	const [error, setError] = useState("");
	const [dateError, setDateError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (rating === null || !watchedDate) {
			setDateError(!watchedDate);
			return;
		}

		const userId = "7M03tdkoD19ICcaH0Jwv";
		const movieData = { id, title: "test", poster_path: "test" };

		try {
			await addReview(
				userId,
				movieData,
				rating,
				reviewText,
				watchedDate.format("YYYY-MM-DD")
			);
			setError("Review saved successfully!");
		} catch (error) {
			console.error("Failed to save review:", error);
			setError("Failed to save review. Please try again.");
		}
	};

	return (
		<div>
			<BackHeader text="My Review" />
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "16px",
				}}
			>
				<Typography variant="h5" gutterBottom>
					Test Title
				</Typography>
				<RatingInput rating={rating} setRating={setRating} />
				<DateInput
					watchedDate={watchedDate}
					setWatchedDate={setWatchedDate}
					dateError={dateError}
					setDateError={setDateError}
				/>
				<ReviewInput
					reviewText={reviewText}
					setReviewText={setReviewText}
				/>
				<Button type="submit" variant="contained" color="primary">
					Save
				</Button>
			</form>

			<Snackbar
				open={Boolean(error)}
				autoHideDuration={6000}
				onClose={() => setError("")}
			>
				<Alert
					onClose={() => setError("")}
					severity={error.includes("Failed") ? "error" : "success"}
				>
					{error}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default ReviewForm;
