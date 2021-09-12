import { MovieCardView } from '../../views/MovieCardView';
import { Link, Route, useRouteMatch, useLocation } from 'react-router-dom';

function ListOfMoviesSearch({ results, query, pageForCard }) {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  const changePageOfSearchForCard = () => {
    pageForCard(url);
  };
  return (
    <>
      <ul>
        {results &&
          results.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}/${movie.id}`,
                    state: {
                      from: location,
                    },
                  }}
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
