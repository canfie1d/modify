import React from 'react';
import StylistGallery from '../Components/StylistGallery';

export default class Stylists extends React.Component {
  render() {

    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-50'>Whether you just need a trim or want a full highlight, we have a stylist that will leave you with amazing hair! Select one our talented stylists below to view more information about them, see their pricing table and find out how to book your next appointment.</p>
        <StylistGallery {...this.props} />
      </div>
    );
  }
}
