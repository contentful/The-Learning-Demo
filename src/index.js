import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/main.css"
// import "./assets/css/theme.css"
import "./assets/css/font-awesome.min.css"



import App from './App';
import reportWebVitals from './reportWebVitals';

import promise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory } from 'react-router';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from './reducers';
import routes from './routes';

import store from "./reducers";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
let persistor = persistStore(store);
ReactDOM.render(
  <div className="w-full overflow-hidden">
  <Provider store={store}>
    {" "}
    {/* <App /> */}
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    <div className="w-full bg-blue-400 text-white text-center">Contentful Learning Services</div>
  </Provider>
  </div>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <BrowserRouter>
  
//       <Router routes={routes} /> 

//     </BrowserRouter>
//     </Provider>

//     </React.StrictMode>,
// document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
