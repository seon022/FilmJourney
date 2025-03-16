const BASE_URL = "https://api.themoviedb.org/3/movie";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMovieList = async (category) => {
  const json = await (
    await fetch(`${BASE_URL}/${category}?api_key=${API_KEY}`)
  ).json();

  return json.results;
};

export const fetchMovieDetail = async (id) => {
  const json = await (
    await fetch(`${BASE_URL}/${id}?api_key=${API_KEY}`)
  ).json();
  return json;
};
