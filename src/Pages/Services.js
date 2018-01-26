import React from 'react';
import ServiceMenu from '../Components/ServiceMenu';
import Products from '../Components/Products';

export default class Services extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-100'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylist specific price details, click on the stylist bio tab.</p>
        <ServiceMenu />
        <Products />
      </div>
    );
  }
}
