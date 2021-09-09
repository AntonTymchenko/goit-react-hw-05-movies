import { useState, useEffect } from "react";
import { useParams, NavLink, Route, useRouteMatch } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack/ButtonBack";
import { Title } from "../components/Title/Title";
import { fetchMoviebyId } from "../service/service";
import { CastView } from "../views/CastView";
import { ReviewsView } from "./ReviewsView";
import "./MovieCardView.css";
import { loadingStatus } from "../utils/loadingStatus";
import Loader from "react-loader-spinner";

function MovieCardView({ query, saveQuery }) {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);
    fetchMoviebyId(movieId).then((movies) => {
      //   console.log(movies);
      setMovie(movies);
      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);
  const clickGoBackLink = () => {
    saveQuery(query);
  };
  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader className="loader" />}
      {loadStatus === loadingStatus.RESOLVED && (
        <>
          <ButtonBack>
            <NavLink
              to={`${path.slice(0, 8)}`}
              className="linkBack"
              onClick={clickGoBackLink}
            >
              Go back
            </NavLink>
          </ButtonBack>
          <Route exact path={`${path.slice(0, 8)}`}>
            {/* <MoviesSearchForm /> */}
          </Route>

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
              <div className="AddInform-div">
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
