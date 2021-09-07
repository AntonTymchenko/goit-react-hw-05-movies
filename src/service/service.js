const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "cf7103a04560136cfec7834a7d0f8600";
//https://api.themoviedb.org/3/trending/all/day?api_key=cf7103a04560136cfec7834a7d0f8600
async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTranding() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=cf7103a04560136cfec7834a7d0f8600&language=en-US
export function fetchMoviebyId(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
}

//https://api.themoviedb.org/3/movie/{movie_id}/?api_key=cf7103a04560136cfec7834a7d0f8600&language=en-US

export function fetchMovieCastCrewById(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
  );
}
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=cf7103a04560136cfec7834a7d0f8600&language=en-US&page=1
export function fetchMovieReviewById(movie_id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
//https://api.themoviedb.org/3/search/movie?api_key=cf7103a04560136cfec7834a7d0f8600&language=en-US&query=Batman&page=1&include_adult=false
export function fetchMovieByQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
