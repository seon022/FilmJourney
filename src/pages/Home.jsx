import { useEffect, useState, useMemo } from "react"; // useMemo를 사용해서 불필요한 계산을 줄이고 상태 변경을 반영
import { fetchMovieList, fetchGenres } from "../api/tmdbApi.js";
import MovieCard from "../components/MovieCard.jsx";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function Home() {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const getMovies = async () => {
    setLoading(true);

    // fetching an API - Process simultaneously using Promise.all
    const [nowPlayingRes, topRatedRes, upcomingRes] = await Promise.all([
      fetchMovieList("now_playing"),
      fetchMovieList("top_rated"),
      fetchMovieList("upcoming"),
    ]);

    setNowPlaying(nowPlayingRes);
    setTopRated(topRatedRes);
    setUpcoming(upcomingRes);
    setLoading(false);
  };

  const handleGenreChange = (event, newGenre) => {
    setSelectedGenre(newGenre); // ✅ 선택 해제(null)도 반영
  };
  const filterByGenre = (movies) =>
    selectedGenre
      ? movies.filter((movie) =>
          movie.genre_ids.includes(Number(selectedGenre))
        )
      : movies;

  const filteredNowPlaying = useMemo(
    () => filterByGenre(nowPlaying),
    [nowPlaying, selectedGenre]
  );
  const filteredTopRated = useMemo(
    () => filterByGenre(topRated),
    [topRated, selectedGenre]
  );
  const filteredUpcoming = useMemo(
    () => filterByGenre(upcoming),
    [upcoming, selectedGenre]
  );

  useEffect(() => {
    getMovies();
    const loadGenres = async () => {
      const genresData = await fetchGenres();
      setGenres(genresData); // ✅ 장르 목록 업데이트
    };
    loadGenres();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="cont-wrapper">
          <ToggleButtonGroup
            color="primary"
            value={selectedGenre}
            exclusive
            onChange={handleGenreChange}
            aria-label="Movie Genre"
            className="genre-filter"
          >
            {genres.map((genre) => (
              <ToggleButton key={genre.id} value={genre.id}>
                {genre.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <section className="movie-set">
            <h2>Now Playing</h2>
            <div className="set-list">
              {filteredNowPlaying.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  aveRate={movie.vote_average.toFixed(1)}
                />
              ))}
            </div>
          </section>

          <section className="movie-set">
            <h2>Top Rated</h2>
            <div className="set-list">
              {filteredTopRated.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  aveRate={movie.vote_average.toFixed(1)}
                />
              ))}
            </div>
          </section>
          <section className="movie-set">
            <h2>Upcoming</h2>
            <div className="set-list">
              {filteredUpcoming.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  aveRate={movie.vote_average.toFixed(1)}
                />
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
