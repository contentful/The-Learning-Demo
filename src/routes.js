import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
// import ProductsIndex from './components/product_index';
import ProductShow from './components/product_show';

export default (
  <Route path="/" component={App}>
      <IndexRoute component={ProductShow}/>
    <Route path ="/:slug" component={ProductShow} />
  </Route>
);
