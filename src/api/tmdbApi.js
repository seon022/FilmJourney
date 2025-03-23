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
