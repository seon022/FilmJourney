import React, { useState } from "react";
import { Container, Box, InputBase, Typography, Paper } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { searchMovies } from "../api/tmdbApi";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.05),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.black, 0.1),
	},
	margin: theme.spacing(4, 0),
	width: "100%",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 2),
		width: "100%",
	},
}));

const SearchPage = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSearch = async (e) => {
		const searchParam = e.target.value;
		setQuery(searchParam);
		if (searchParam.trim() === "") {
			setMovies([]);
		}
		setLoading(true);
		setError(null);
		try {
			const response = await searchMovies(searchParam);
			setMovies(response);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container>
			<Box>
				<Search>
					<SearchInput
						placeholder="Search movies..."
						inputProps={{ "aria-label": "search" }}
						value={query}
						onChange={handleSearch}
					/>
				</Search>
			</Box>
			{query ? (
				<Box>
					<Typography variant="h6" gutterBottom>
						Search Results for: <strong>{query}</strong>
					</Typography>

					{movies ? (
						<Box display="grid" gap={2}>
							{movies.map((movie) => {
								return (
									<Paper key={movie.id} sx={{ padding: 2 }}>
										<img
											src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
											alt={movie.title}
											className="poster"
										/>
										<Typography variant="body2" color="text.secondary">
											{movie.title}
											{movie.release_date}
										</Typography>
									</Paper>
								);
							})}
						</Box>
					) : (
						<Typography color="text.secondary">No Result.</Typography>
					)}
				</Box>
			) : (
				<Typography variant="h6">No input yet.</Typography>
			)}
		</Container>
	);
};

export default SearchPage;
