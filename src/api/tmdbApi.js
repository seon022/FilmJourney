const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovies = async (category) => {
	const json = await (
		await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}`)
	).json();

	return json.results;
};
