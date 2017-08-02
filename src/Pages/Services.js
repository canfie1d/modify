import React from 'react';
import ServiceMenu from '../Components/ServiceMenu';

export default class Services extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <ServiceMenu {...this.props} />
        <p className='p p--dark'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylist specific price details, click on the stylist bio tab.</p>
        <p className='p p--dark p--small p--align-left'>* Hana only</p>
        <p className='p p--dark p--small p--align-left m-b-100'>** Tina &amp; Alysia only</p>
        <div className='products'>
          <img className='products__img' alt='' src="http://nebula.wsimg.com/7f741771d666d05ffc993b551308bc81?AccessKeyId=ED788583612E85067D70&disposition=0&alloworigin=1" />
          <img className='products__img' alt='' src="http://nebula.wsimg.com/ce29f0bd818b87f0e2f104a03173b1cc?AccessKeyId=ED788583612E85067D70&disposition=0&alloworigin=1" />
          <img className='products__img' alt='' src="http://nebula.wsimg.com/a6f8d5474e141982a8ff22ce634273b9?AccessKeyId=ED788583612E85067D70&disposition=0&alloworigin=1" />
        </div>
      </div>
    );
  }
}
