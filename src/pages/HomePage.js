import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/tmdbApi";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const getMovies = async () => {
    setLoading(true);

    // fetching an API - Process simultaneously using Promise.all
    const [nowPlayingRes, topRatedRes, upcomingRes] = await Promise.all([
      fetchMovies("now_playing"),
      fetchMovies("top_rated"),
      fetchMovies("upcoming"),
    ]);

    setNowPlaying(nowPlayingRes);
    setTopRated(topRatedRes);
    setUpcoming(upcomingRes);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <section>
            <h2>Now Playing</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              {nowPlaying.map((movie) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                  <p>avg: {movie.vote_average.toFixed(1)}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Top Rated</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              {topRated.map((movie) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                  <p>avg: {movie.vote_average.toFixed(1)}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2>Upcoming</h2>
            <div style={{ display: "flex", gap: "1rem" }}>
              {upcoming.map((movie) => (
                <div key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                  <p>avg: {movie.vote_average.toFixed(1)}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
      <nav>
        <ul>
          <li>
            <Link to="/movie/1">Go to Movie 1</Link>
          </li>
          <li>
            <Link to="/mypage">Go to My Page</Link>
          </li>
          <li>
            <Link to="/style-guide">StyleGuidePage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
