import React from 'react';
import Hero from '../Components/Hero';
import Header from '../Components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Header />
        <Hero size='short' content='title'>
          <h1 className='hero__title'>Contact</h1>
        </Hero>
        <main>
          
        </main>
      </div>
    );
  }
}
