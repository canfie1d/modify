import React from 'react';
import StylistGallery from '../Components/StylistGallery';
import Hero from '../Components/Hero';
import Header from '../Components/Header';

export default class Home extends React.Component {
  render() {
    return (
      <div className='page-wrapper'>
        <Header />
        <Hero size='short' content='title'>
          <h1 className='hero__title'>Stylists</h1>
        </Hero>
        <main>
          <StylistGallery />
        </main>
      </div>
    );
  }
}
