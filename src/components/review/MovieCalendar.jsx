import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import useMovieStore from "../../store/movieStore";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";

const MovieCalendar = () => {
	const { reviews, fetchReviews } = useMovieStore();

	useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	const events = reviews.map((review) => ({
		title: review.movieTitle,
		date: review.watchedDate,
		extendedProps: {
			poster: review.moviePoster,
		},
	}));

	const eventContent = (eventInfo) => {
		if (!eventInfo?.event || !eventInfo.view?.calendar) {
			return <div>Loading...</div>;
		}
		const poster = eventInfo.event.extendedProps.poster;

		return (
			<div>
				{poster ? (
					<CardMedia
						component="img"
						src={`https://image.tmdb.org/t/p/w200${poster}`}
						alt={eventInfo.event.title}
					/>
				) : (
					<div>{eventInfo.event.title}</div>
				)}
			</div>
		);
	};
	return (
		<Box sx={{ width: "100%", mb: 6 }}>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				events={events}
				eventContent={eventContent}
			/>
		</Box>
	);
};

export default MovieCalendar;
