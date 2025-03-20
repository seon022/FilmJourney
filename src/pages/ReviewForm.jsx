import { useState } from "react";
import { addReview } from "../api/reviewService";
import { useParams } from "react-router-dom";
import BackHeader from "../components/BackHeader";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function ReviewForm() {
	const { id } = useParams();
	const [reviewText, setReviewText] = useState("");
	const [rating, setRating] = useState(5);
	const [watchedDate, setWatchedDate] = useState(dayjs());

	const [error, setError] = useState("");
	const [dateError, setDateError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let hasError = false;

		if (rating === null) {
			hasError = true;
		}

		if (!watchedDate) {
			setDateError(true);
			hasError = true;
		} else {
			setDateError(false);
		}

		if (hasError) return;

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
			setError("Review saved successfully!"); // 성공 메시지
		} catch (error) {
			console.error("Failed to save review:", error);
			setError("Failed to save review. Please try again."); // 오류 메시지
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
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						label="Watched Date"
						value={watchedDate}
						onChange={(newValue) => {
							setWatchedDate(newValue);
							setDateError(!newValue || !newValue.isValid());
						}}
						error={dateError}
						sx={{ backgroundColor: "white" }}
					/>
					{dateError && (
						<Typography color="error" variant="body2">
							Watched Date is required.
						</Typography>
					)}
				</LocalizationProvider>
				<TextField
					label="Write your review here (optional)"
					multiline
					fullWidth
					rows={3}
					value={reviewText}
					onChange={(e) => setReviewText(e.target.value)}
					sx={{ backgroundColor: "white" }}
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
