import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

import { Title } from '../components/Title/Title';
import { fetchMoviebyId } from '../service/service';
import { CastView } from '../views/CastView';
import { ReviewsView } from './ReviewsView';
import './MovieCardView.css';
import { loadingStatus } from '../utils/loadingStatus';
import Loader from 'react-loader-spinner';

function MovieCardView({ query, saveQuery, currentPage }) {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);
    fetchMoviebyId(movieId).then(movies => {
      // console.log(movies);
      setMovie(movies);
      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader className="loader" />}
      {loadStatus === loadingStatus.RESOLVED && (
        <>
          <NavLink to={currentPage ?? '/'} className="linkBack">
            Go back
          </NavLink>

          <Route exact path={`${currentPage}`} />

          <Title title={movie.title + ' ' + movie.release_date.slice(0, 4)} />
          <div className="wrapperCardInfo">
            <div className="imgOverview">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="imgCard"
                />
              ) : (
                <img
                  src="https://w.zhinka.tv/templates/Default/dleimages/no_image.jpg"
                  alt={movie.title}
                  className="imgCard"
                />
              )}

              <div className="overview">
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </div>
            </div>
            <div className="ganresLink-div">
              <div className="ganres-div">
                <h3>Genres</h3>
                <ul className="ganresList">
                  {movie.genres.map(item => (
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
                    <NavLink
                      to={{
                        pathname: `${url}/cast`,
                        state: {
                          from: location,
                        },
                      }}
                      className="castReviewListItem"
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li key={101}>
                    <NavLink
                      to={{
                        pathname: `${url}/reviews`,
                        state: {
                          from: location,
                        },
                      }}
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
