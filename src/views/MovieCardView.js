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
            <NavLink to="/" className="linkBack">
              Go back
            </NavLink>
          </ButtonBack>

          <Title title={movie.title + " " + movie.release_date.slice(0, 4)} />
          <div className="wrapperCardInfo">
            <div className="imgOverview">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                className="imgCard"
              />
              <div className="overview">
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="ganresLink-div">
              <div className="ganres-div">
                <h3>Genres</h3>
                <ul className="ganresList">
                  {movie.genres.map((item) => (
                    <li key={item.id} className="ganresListItem">
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div clasName="AddInform-div">
                <h3>Additional inforamtion</h3>
                <ul className="CastReviewList">
                  <li key={100}>
                    <NavLink to={`${url}/cast`} className="castReviewListItem">
                      Cast
                    </NavLink>
                  </li>
                  <li key={101}>
                    <NavLink
                      to={`${url}/reviews`}
                      className="castReviewListItem"
                    >
                      {" "}
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
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
