import React, { useState, useCallback, useEffect } from "react";
import debounce from "lodash.debounce";
import { Container, Box, InputBase, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { searchMovies } from "../api/tmdbApi";
import SearchMovieCard from "../components/SearchMovieCard";

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
	},
}));

const SearchPage = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);

	const debouncedSearch = useCallback(
		debounce(async (searchParam) => {
			if (searchParam.trim() === "") {
				setMovies([]);
				return;
			}
			try {
				const response = await searchMovies(searchParam);
				setMovies(response);
			} catch (error) {
				console.error(error);
			}
		}, 300),
		[]
	);

	const handleInputChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		debouncedSearch(value);
	};
	const handleInputBlur = () => {
		debouncedSearch.flush();
	};

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, [debouncedSearch]);

	return (
		<Container>
			<Box>
				<Search>
					<SearchInput
						placeholder="Search movies..."
						inputProps={{ "aria-label": "search" }}
						value={query}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
					/>
				</Search>
			</Box>

			{query ? (
				<Box>
					<Typography variant="h6" gutterBottom>
						Search Results for: <strong>{query}</strong>
					</Typography>

					{movies.length > 0 ? (
						<Box
							display="grid"
							gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
							gap={2}
						>
							{movies.map((movie) => (
								<SearchMovieCard
									key={movie.id}
									id={movie.id}
									poster={movie.poster_path}
									title={movie.title}
									releaseDate={movie.release_date}
								/>
							))}
						</Box>
					) : (
						<Typography color="text.secondary">No Results.</Typography>
					)}
				</Box>
			) : (
				<Typography variant="h6">No input yet.</Typography>
			)}
		</Container>
	);
};

export default SearchPage;
