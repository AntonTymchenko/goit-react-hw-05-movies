import { Link } from "react-router-dom";
import "./ListOfMoviesHomePage.css";

function ListOfMoviesHomePage({ movies }) {
  return (
    <ul className="ImageGallery">
      {movies &&
        movies.map((movie) => {
          return (
            <li key={movie.id} className="ImageGalleryItem">
              <Link to={`/movies/${movie.id}`} className="LinkOfListHomepage">
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
