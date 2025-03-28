import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import useMovieStore from "../../store/movieStore";
import { Box } from "@mui/system";
import { CardMedia, CircularProgress, Chip } from "@mui/material";

const MovieCalendar = () => {
	const { reviews, fetchReviews } = useMovieStore();

	useEffect(() => {
		fetchReviews();
	}, [fetchReviews]);

	const groupedEvents = reviews.reduce((acc, review) => {
		const date = review.watchedDate;
		if (!acc[date]) {
			acc[date] = [];
		}
		acc[date].push(review);
		return acc;
	}, {});

	const events = Object.keys(groupedEvents).map((date) => {
		const eventGroup = groupedEvents[date];
		const firstEvent = eventGroup[0];

		return {
			title: firstEvent.movieTitle,
			date: date,
			extendedProps: {
				poster: firstEvent.moviePoster,
				otherEvents: eventGroup.slice(1),
			},
		};
	});

	const eventContent = (eventInfo) => {
		if (!eventInfo?.event || !eventInfo.view?.calendar) {
			return (
				<div>
					<CircularProgress size={24} />
				</div>
			);
		}

		const poster = eventInfo.event.extendedProps.poster;
		const otherEvents = eventInfo.event.extendedProps.otherEvents;

		return (
			<>
				<div>
					<CardMedia
						component="img"
						image={`https://image.tmdb.org/t/p/w200${poster}`}
						alt={eventInfo.event.title}
						sx={{
							width: "100%",
							height: "auto",
						}}
					/>
				</div>
				<div>
					{otherEvents.length > 0 && (
						<Chip
							label={`+ ${otherEvents.length} more`}
							color="secondary"
							size="small"
							sx={{
								mt: 1,
								fontSize: {
									xs: "0.7rem",
									sm: "0.9rem",
								},
							}}
							onClick={() => {
								console.log("Show more events!");
							}}
						/>
					)}
				</div>
			</>
		);
	};

	return (
		<Box
			sx={{
				width: "100%",
				mb: 4,
				fontSize: { xs: 12, sm: 16 },
			}}
		>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				height="auto"
				events={events}
				eventContent={eventContent}
				eventColor="transparent"
			/>
		</Box>
	);
};

export default MovieCalendar;
