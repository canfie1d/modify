import React from 'react';
import ServiceMenu from '../Components/ServiceMenu';
import evo from '../Assets/Images/Products/evo.svg';
import onm from '../Assets/Images/Products/onm.png';
import onesta from '../Assets/Images/Products/onesta.png';
import ref from '../Assets/Images/Products/ref.svg';

export default class Services extends React.Component {

  renderImages() {
    let images = [{src: evo, alt: 'EVO Logo'}, {src: onm, alt: 'ONM Logo'}, { src: ref, alt:"REF LOGO"},{src: onesta, alt: "ONESTA Logo"}];
    let domImages = []

    for (let i = 0; i < images.length; i++) {
      domImages.push(
        <div key={`brand-image-${i}`} className='product__img-wrapper'>
          <img className='products__img' alt={images[i].alt} src={images[i].src} />
        </div>
      );
    }

    return domImages;

  }

  render() {
    return (
      <div className='content-flex'>
        <ServiceMenu {...this.props} />
        <p className='p p--dark'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylist specific price details, click on the stylist bio tab.</p>
        <p className='p p--dark p--small p--align-left'>* Hana only</p>
        <p className='p p--dark p--small p--align-left m-b-100'>** Tina &amp; Alysia only</p>
        <div className='products'>
          {this.renderImages()}
        </div>
      </div>
    );
  }
}
