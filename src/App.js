import "./App.css";
import Container from "./components/Container/Container";
import Appbar from "./components/Appbar/Appbar";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./views/Homepage";
import { NotFoundView } from "./views/NotFoundView";
import { Movies } from "./views/Movies";
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
            <Movies />
          </Route>

          <Route path="/movies/:movieId">
            <MovieCardView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
