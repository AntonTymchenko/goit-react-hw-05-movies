import "./App.css";
import Container from "./components/Container/Container";
import Appbar from "./components/Appbar/Appbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./views/Homepage";
import { useState } from "react";
import { MoviesSearchForm } from "./views/MoviesSearchForm";
import { MovieCardView } from "./views/MovieCardView";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Container>
        <Appbar clearQuery={setQuery} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesSearchForm saveQuery={setQuery} queryApp={query} />
          </Route>

          <Route path="/movies/:movieId">
            <MovieCardView query={query} saveQuery={setQuery} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
