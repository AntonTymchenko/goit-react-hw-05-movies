import { MovieCardView } from "../../views/MovieCardView";
import { Link, Route, useRouteMatch } from "react-router-dom";

function ListOfMoviesSearch({ results, query, pageForCard }) {
  const { path, url } = useRouteMatch();

  const changePageOfSearchForCard = () => {
    pageForCard(url);
  };
  return (
    <>
      <ul>
        {results &&
          results.map((movie) => {
            return (
              <li key={movie.id}>
                <Link
                  to={`${url}/${movie.id}`}
                  onClick={changePageOfSearchForCard}
                >
                  {movie.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <Route path={`${path}/:movieId`}>
        <MovieCardView query={query} props={Route.props} />
      </Route>
    </>
  );
}
export { ListOfMoviesSearch };
