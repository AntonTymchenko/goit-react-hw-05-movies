import { useState, useEffect } from "react";
import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { Title } from "../components/Title/Title";
import { fetchMoviebyId } from "../service/service";
import { CastView } from "../views/CastView";
import { ReviewsView } from "./ReviewsView";
import "./MovieCardView.css";

function MovieCardView() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  //   console.log(movieId);
  useEffect(() => {
    fetchMoviebyId(movieId).then((movies) => {
      //   console.log(movies);
      setMovie(movies);
    });
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <ButtonBack>
            1
            <NavLink to="/" className="linkBack">
              Go back
            </NavLink>
          </ButtonBack>

          <Title title={movie.title + " " + movie.release_date.slice(0, 4)} />
          <div className="wrapperCardInfo">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width="350px"
              height="350px"
            />
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <h3>Additional inforamtion</h3>
            <ul>
              <li key={100}>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li key={101}>
                <NavLink to={`${url}/reviews`}> Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Route path={`${path}/cast`}>
            <CastView movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <ReviewsView movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}

export { MovieCardView };
