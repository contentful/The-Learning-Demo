import React from 'react';
// import { Route, IndexRoute } from 'react-router';
// import { Route } from 'react-router';
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";


import App from './components/app';
import ProductShow from './components/product_show2';
const Star = () =>{
  return "root"
}

export default  function Routes (){

  return(
    <Switch>
      <Route path="/" component={ProductShow}  />
      <Route path="/product/twd-paradise-beach" component={ProductShow}  />
      
    </Switch>
  )

}

