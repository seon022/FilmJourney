import { useEffect, useState } from "react";

const API_KEY = "d4145ff146d500f1100dccee3b48dc74";

function Sample() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
      )
    ).json();

    setMovies(json.results);
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
          {movies.map((movie) => (
            <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <p>{movie.title}</p>
                <p>avg</p>
                <p>{movie.vote_average.toFixed(1)}</p>
                </div>
            
          ))}
        </div>
      )}
    </div>
  );
}

export default Sample;
