const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieList = async (category) => {
	const json = await (
		await fetch(`${BASE_URL}/movie/${category}?api_key=${API_KEY}`)
	).json();

	return json.results;
};

export const fetchGenres = async () => {
	const json = await (
		await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
	).json();
	return json.genres;
};

export const fetchMovieDetail = async (id) => {
	const json = await (
		await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
	).json();
	return json;
};

export const fetchCast = async (id) => {
	const json = await (
		await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
	).json();
	return json;
};

export const fetchSimilarMovies = async (id) => {
	const json = await (
		await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`)
	).json();
	return json.results;
};

export const searchMovies = async (query) => {
	if (!query.trim()) return [];

	const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
		query
	)}&include_adult=false&language=en-US&page=1`;
	const options = { method: "GET", headers: { accept: "application/json" } };

	try {
		const res = await fetch(url, options);
		if (!res.ok) {
			throw new Error(`HTTP error! Status : ${res.status}`);
		}
		const json = await res.json();
		return json.results || [];
	} catch (err) {
		console.error("Failed to fetch movies:", err);
		return [];
	}
};
