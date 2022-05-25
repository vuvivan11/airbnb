import { Suspense } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { renderRoutesHome } from "./routes";

function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Switch>
          {renderRoutesHome()}
          <Route path="" component={PageNotFound}></Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
