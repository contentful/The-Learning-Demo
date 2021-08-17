import React, { Fragment, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fragment />}>
        <Switch>
          <Route path="/c"></Route>
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
