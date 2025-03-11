const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export async function fetchMovies() {
	try {
		const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
		const data = await response.json();
		return data.results; // 영화 리스트 반환
	} catch (error) {
		console.error("Failed to fetch movies:", error);
		return [];
	}
}