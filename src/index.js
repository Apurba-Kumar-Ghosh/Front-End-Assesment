import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import {BrowserRouter as Router} from 'react-router-dom'
const GlobalStyles = createGlobalStyle`
body {
  margin : 0;
  padding : 0;
  font-family : Roboto;
  box-sizing : border-box;
}`;
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
