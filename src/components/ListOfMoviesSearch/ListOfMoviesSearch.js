import { MovieCardView } from "../../views/MovieCardView";
import { Link, Route, useRouteMatch } from "react-router-dom";

function ListOfMoviesSearch({ results, query }) {
  const { path } = useRouteMatch();

  return (
    <>
      <ul>
        {results &&
          results.map((movie) => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
      <Route path={`${path}/:movieId`}>
        <MovieCardView query={query} />
      </Route>
    </>
  );
}
export { ListOfMoviesSearch };
