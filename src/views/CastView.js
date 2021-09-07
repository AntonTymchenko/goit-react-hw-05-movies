import { fetchMovieCastCrewById } from "../service/service";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function CastView({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCastCrewById(movieId).then((data) => {
      setCast(data.cast);
      console.log(data.cast);
    });
  }, [movieId]);
  return (
    <>
      <ul>
        {cast &&
          cast.map((actor) => {
            let srcUrl = ``;
            if (!actor.profile_path) {
              srcUrl = "http://placehold.it/200x200";
            } else {
              srcUrl = `https://image.tmdb.org/t/p/original/${actor.profile_path}`;
            }
            return (
              <li key={actor.id}>
                <img src={srcUrl} alt={actor.name} width="80px" height="80px" />
                <p>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export { CastView };
