import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Redux/Store/Store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App className="container"/>
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();