import { fetchMovieCastCrewById } from '../service/service';
import { useState, useEffect } from 'react';
import './CastView.css';

function CastView({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCastCrewById(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);
  return (
    <>
      <ul className="castList">
        {cast &&
          cast.map(actor => {
            let srcUrl = ``;
            if (!actor.profile_path) {
              srcUrl = 'http://placehold.it/200x200';
            } else {
              srcUrl = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
            }
            return (
              <li key={actor.id} className="castListItem">
                <img src={srcUrl} alt={actor.name} width="80px" height="80px" />
                <p className="actorCharacter">
                  <b>Character</b>: {actor.character}
                </p>
                <p className="actorCharacter">
                  <b>Actor</b>: {actor.name}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export { CastView };
