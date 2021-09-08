import { MovieCardView } from "../../views/MovieCardView";
import { Link, Route, useRouteMatch } from "react-router-dom";

function ListOfMoviesSearch({ results }) {
  const { url, path } = useRouteMatch();

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
