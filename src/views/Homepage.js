import { Title } from "../components/Title/Title";
import { fetchTranding } from "../service/service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchTranding().then((movies) => {
      setMovies(movies);
      // console.log(movies);
    });
  }, []);

  return (
    <>
      <Title title="Tranding today" />
      <ul>
        {movies &&
          movies.results.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export { HomePage };
