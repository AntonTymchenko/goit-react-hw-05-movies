import { fetchMovieByQuery } from "../service/service";
import { useState } from "react";
import "./Movies.css";
import { ListOfMoviesSearch } from "../components/ListOfMoviesSearch/ListOfMoviesSearch";
import { loadingStatus } from "../utils/loadingStatus";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MoviesSearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    setQuery(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoadStatus(loadingStatus.PENDING);
    if (query.trim() === "") {
      setLoadStatus(loadingStatus.RESOLVED);
      return;
    } else {
      setResults([]);
      fetchMovieByQuery(query).then((data) => {
        if (data.results.length === 0) {
          setLoadStatus(loadingStatus.RESOLVED);
          return toast.error("Try again please !!!");
        } else {
          setResults(data.results);
          setLoadStatus(loadingStatus.RESOLVED);
        }
      });
      setQuery("");
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="searchPage">
        <form onSubmit={handleFormSubmit} className="formForSearch">
          <input
            value={query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleInput}
          />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        {loadStatus === loadingStatus.PENDING && (
          <Loader className="loaderMovies" />
        )}
        {loadStatus === loadingStatus.RESOLVED && (
          <ListOfMoviesSearch results={results} />
        )}
      </div>
    </>
  );
}

export { MoviesSearchForm };
