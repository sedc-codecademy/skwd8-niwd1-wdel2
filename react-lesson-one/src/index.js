// import the react lib
import React from 'react';
// import the lib to render app to DOM
import ReactDOM from 'react-dom';
import './index.css';
// import the root component of our app
import App from './App';

// rendering the App componnent into DOM
// rendered onto the element with id === root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);