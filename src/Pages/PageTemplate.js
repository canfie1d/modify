import React from 'react';
import Hero from '../Components/Hero';
import heroImage from '../Assets/Images/Hero/hero2.jpg';
import Header from '../Components/Header';
import Routes from '../routes';
import ScrollToTop from '../Services/ScrollToTop';

export default class PageTemplate extends React.Component {
  render() {
    return (
      <div>
        <Hero size='tall' type='title' heroImage={heroImage} heroImageAlt="" />
        <div className='page-wrapper'>
          <Header />
          <main className='page__content'>
            <ScrollToTop offset={100} />
            <Routes {...this.props} />
          </main>
        </div>
      </div>
    );
  }
}
