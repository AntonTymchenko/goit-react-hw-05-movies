import { Link, useRouteMatch } from "react-router-dom";
import "./ListOfMoviesHomePage.css";
// import { useRouteMatch } from "react-router-dom";

function ListOfMoviesHomePage({ movies, changePage }) {
  const { url } = useRouteMatch();
  // console.log(url);

  const onLinkListHomeClick = () => {
    changePage(url);
  };
  return (
    <ul className="ImageGallery">
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className="ImageGalleryItem">
              <Link
                to={`/movies/${movie.id}`}
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
                  <h3>{movie.title}</h3>
                )}
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export { ListOfMoviesHomePage };
