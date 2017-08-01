import React from 'react';
import Hero from '../Components/Hero';
import heroImage from '../Assets/Images/hero2.jpg';
import Header from '../Components/Header';
import routes from '../routes';
import NavPlaceholder from '../Components/NavPlaceholder';

export default class PageTemplate extends React.Component { 
  render() {
    return (
      <div>
        <Hero size='tall' type='title' heroImage={heroImage} heroImageAlt="" />
        <div className='page-wrapper'>
          <Header />
          <main className='page__content'>
            <NavPlaceholder />
            {routes}
          </main>
        </div>
      </div>
    );
  }
}

