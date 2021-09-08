import "./App.css";
import Container from "./components/Container/Container";
import Appbar from "./components/Appbar/Appbar";
import { Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./views/Homepage";

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
          <Redirect to="/" />
          {/* <Route path="/">
            <HomePage />
          </Route> */}
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
