import React, { Fragment, Suspense, lazy } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
// import theme from "./theme";
// import GlobalStyles from "./GlobalStyles";
// import * as serviceWorker from "./serviceWorker";
// import Pace from "./shared/components/Pace";
import Routes from "./routes"

// const LoggedInComponent = lazy(() => import("./logged_in/components/Main"));

// const LoggedOutComponent = lazy(() => import("./logged_out/components/Main"));

function App() {
  return (
    <BrowserRouter>

        {/* <Pace color={theme.palette.primary.light} /> */}
        <Suspense fallback={<Fragment />}>
          <Switch>
            <Route path="/c">
              {/* <LoggedInComponent /> */}
            </Route>
            <Route>
              <Routes />
            </Route>
          </Switch>
        </Suspense>

    </BrowserRouter>
  );
}

// serviceWorker.register();

export default App;