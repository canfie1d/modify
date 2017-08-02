import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './Services/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axe from 'react-axe';
import App from './App';
import { hideLoadingIndicator } from './Services/HelperFunctions';

const store = createStore();

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

// let findCssLink = function () {
//   for (let i = 0; i < document.getElementsByTagName('link').length; i++) {
//     if (document.getElementsByTagName('link')[i].rel === 'stylesheet') {
//       return document.getElementsByTagName('link')[i];
//     };
//   }
// }

// let link = findCssLink();

// console.log(link);
// link.onload = function () {
//   console.log('here');
//   hideLoadingIndicator();
// }
