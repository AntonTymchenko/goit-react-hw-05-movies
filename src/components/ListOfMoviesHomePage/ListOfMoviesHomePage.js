import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import './ListOfMoviesHomePage.css';

import slugify from 'slugify';

const makeSlug = string => slugify(string, { lower: true });

function ListOfMoviesHomePage({ movies, changePage }) {
  const { url } = useRouteMatch();
  const location = useLocation();

  const onLinkListHomeClick = () => {
    changePage(url);
  };
  return (
    <ul className="ImageGallery">
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id} className="ImageGalleryItem">
              <Link
                to={{
                  pathname: `/movies/${makeSlug(`${movie.title} ${movie.id}`)}`,
                  state: {
                    from: location,
                  },
                }}
                className="LinkOfListHomepage"
                onClick={onLinkListHomeClick}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="ImageGalleryItem-image"
                />

                {movie.name ? (
                  <h3 className="CardTitleHomePage">{movie.name}</h3>
                ) : (
                  <h3 className="CardTitleHomePage">{movie.title}</h3>
                )}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export { ListOfMoviesHomePage };
