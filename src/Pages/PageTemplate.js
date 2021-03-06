import React from 'react';
import Hero from '../Components/Hero';
import Header from '../Components/Header';
import Routes from '../routes';
import ScrollToTop from '../Services/ScrollToTop';

export default class PageTemplate extends React.Component {
  render() {
    return (
      <div>
        <Hero size='tall' type='title' heroImage={"https://s3.amazonaws.com/modifyhair-images/hero/hero.jpg"} heroImageAlt="" />
        <div className='page-wrapper'>
          <Header />
          <main className='page__content'>
            <ScrollToTop offset={80} />
            <Routes {...this.props} />
          </main>
        </div>
      </div>
    );
  }
}
