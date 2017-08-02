import React from 'react';
import PageTemplate from './Containers/PageTemplate';
import ScrollToTop from './Components/ScrollToTop';
import './App.styl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <ScrollToTop>
            <PageTemplate />
          </ScrollToTop>
        </div>
      </div>
    );
  }
}
