import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function DateInput({ watchedDate, setWatchedDate, dateError, setDateError }) {
	return (
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
	);
}

export default DateInput;
