import React from 'react';
import ServiceMenu from '../Components/ServiceMenu';
import { PRODUCTS } from '../Services/Data';

export default class Services extends React.Component {

  renderImages() {
    let images = [];

    for (let i = 0; i < PRODUCTS.length; i++) {
      images.push(
        <div key={`brand-image-${i}`} className='product__img-wrapper'>
          <img className='products__img' alt={PRODUCTS[i].alt} src={PRODUCTS[i].src} />
        </div>
      );
    }

    return images;

  }

  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-100'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylist specific price details, click on the stylist bio tab.</p>
        <ServiceMenu {...this.props} />
        <p className='p p--dark p--small p--align-left'>* Hana only</p>
        <p className='p p--dark p--small p--align-left m-b-100'>** Tina &amp; Alysia only</p>
        <div className='products'>
          {this.renderImages()}
        </div>
      </div>
    );
  }
}
