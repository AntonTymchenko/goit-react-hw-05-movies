import { fetchMovieByQuery } from "../service/service";
import { useState } from "react";

import { ListOfMoviesSearch } from "../components/ListOfMoviesSearch/ListOfMoviesSearch";

function Movies() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    setQuery(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    } else {
      fetchMovieByQuery(query).then((data) => setResults(data.results));
      setQuery("");
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          value={query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInput}
        />
        <button type="submit">Search</button>
      </form>
      {results && <ListOfMoviesSearch results={results} />}
    </>
  );
}

export { Movies };
