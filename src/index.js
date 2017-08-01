import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createStore from './Services/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axe from 'react-axe';
import ScrollToTop from './Components/ScrollToTop';
import App from './App';
import { hideLoadingIndicator } from './Services/HelperFunctions';

const store = createStore();

if (process.env.NODE_ENV !== 'production') {
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

hideLoadingIndicator();

registerServiceWorker();
