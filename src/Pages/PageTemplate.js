import React from 'react';
import Hero from '../Components/Hero';
import heroImage from '../Assets/Images/Hero/hero2.jpg';
import Header from '../Components/Header';
import Routes from '../routes';
import NavPlaceholder from '../Components/NavPlaceholder';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../Services/ScrollToTop';

export default class PageTemplate extends React.Component {

  renderBackButton() {
    if (this.props.currentStylist !== '') {
      let classes = [
        'profile__button',
        this.props.navFixed ? 'profile__button--fixed' : null
      ];

      return (
        <div className={classNames(classes)}>
          <NavLink className='nav-link__button nav-link__button--alt' to='/stylists'>&#12296; All Stylists</NavLink>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Hero size='tall' type='title' heroImage={heroImage} heroImageAlt="" />
        <div className='page-wrapper'>
          <Header location={this.props.location} />
          {this.renderBackButton()}
          <main className='page__content'>
            <NavPlaceholder navFixed={this.props.navFixed} />
            <ScrollToTop location={this.props.location}>
              <Routes {...this.props} />
            </ScrollToTop>
          </main>
        </div>
      </div>
    );
  }
}
