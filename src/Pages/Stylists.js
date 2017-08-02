import React from 'react';
import StylistGallery from '../Components/StylistGallery';

export default class Stylists extends React.Component {
  render() {

    return (
      <div className='content-flex'>
        <StylistGallery {...this.props} />
      </div>
    );
  }
}
