import React, { useState, useCallback, useEffect } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Box, InputBase, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { alpha, styled } from "@mui/material/styles";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";

import { searchMovies } from "../api/tmdbApi";
import SearchMovieCard from "../components/SearchMovieCard";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0.05),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.black, 0.1),
	},
	marginBottom: "1rem",
	width: "100%",
	display: "flex",
	alignItems: "center",
	height: "100%",
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1.5, 2),
		paddingLeft: theme.spacing(3),
	},
}));

const SearchPage = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem("searchQuery");
	}, []);

	const debouncedSearch = useCallback(
		debounce(async (searchParam) => {
			if (searchParam.trim() === "") {
				setMovies([]);
				return;
			}
			try {
				const response = await searchMovies(searchParam);
				const sortedMovies = response.sort(
					(a, b) => new Date(b.release_date) - new Date(a.release_date)
				);

				setMovies(sortedMovies);
				localStorage.setItem("searchQuery", searchParam);
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
		<div>
			<Container>
				<Box display="flex" alignItems="center">
					<IconButton
						edge="start"
						color="inherit"
						onClick={() => navigate(-1)}
						sx={{ mr: 2, mb: 2 }}
					>
						<ArrowBackIcon />
					</IconButton>
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
								gridTemplateColumns={{
									xs: "1fr 1fr",
									sm: "1fr 1fr",
									lg: "1fr 1fr 1fr",
								}}
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
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								mt={8}
							>
								<Typography color="text.secondary">No Results.</Typography>
							</Box>
						)}
					</Box>
				) : (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						mt={8}
					>
						<Typography variant="h8">Please enter a search term.</Typography>
					</Box>
				)}
			</Container>
		</div>
	);
};

export default SearchPage;
