import React from 'react';
import PageTemplate from './Containers/PageTemplate';
import './App.styl';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app__container">
          <PageTemplate />
        </div>
      </div>
    );
  }
}
