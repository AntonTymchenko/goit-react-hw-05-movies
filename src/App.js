import "./App.css";
import Container from "./components/Container/Container";
import Appbar from "./components/Appbar/Appbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./views/Homepage";

import { MoviesSearchForm } from "./views/MoviesSearchForm";
import { MovieCardView } from "./views/MovieCardView";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Container>
        <Appbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesSearchForm />
          </Route>

          <Route path="/movies/:movieId">
            <MovieCardView />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
