const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchMovies = async (category) => {
  const json = await (
    await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}`)
  ).json();

  return json.results;
};