import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./components/app";
import ProductShow from "./components/product_show";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={ProductShow} />
      <Route path="/product/twd-paradise-beach" component={ProductShow} />
    </Switch>
  );
}
