import { Route } from "react-router";
import { HomePage } from "./Homepage";

function NotFoundView() {
  return (
    <>
      <Route>
        <HomePage />
      </Route>
    </>
  );
}

export { NotFoundView };
