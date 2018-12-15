import React from 'react';
import StylistGallery from '../Components/StylistGallery';
import { NavLink } from 'react-router-dom';

export default class Stylists extends React.Component {
  render() {

    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-100'>Whether you just need a trim or want a full highlight, we have a stylist that will leave you with amazing hair! Select one our talented stylists below to view more information about them, see their pricing table, and to find out how to book your next appointment.</p>
        <StylistGallery {...this.props} />
        <NavLink className='nav-link__button nav-link__button--alt' to='/contact'>Contact Us</NavLink>
      </div>
    );
  }
}
