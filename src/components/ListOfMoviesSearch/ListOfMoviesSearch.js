import { MovieCardView } from "../../views/MovieCard.View";
import { Link, Route, useRouteMatch } from "react-router-dom";
// import { useState } from "react";

function ListOfMoviesSearch({ results }) {
  const { url, path } = useRouteMatch();
  //   const [movieNumber, setMovieNumber] = useState(null);
  return (
    <>
      <ul>
        {results &&
          results.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
      <Route path={`${path}/:movieId`}>
        <MovieCardView />
      </Route>
    </>
  );
}
export { ListOfMoviesSearch };
