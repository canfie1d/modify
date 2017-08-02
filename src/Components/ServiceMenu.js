import React from 'react';
import { getServices } from '../Services/Data';

export default class ServiceMenu extends React.Component {

  renderServices() {
    let servicesDomArr = [];
    let servicesArr = getServices();

    for (let i = 0; i < servicesArr.length; i++) {
      servicesDomArr.push (
        <li key={`service-item-${i}`} className='service__item'>
          <span className='service__name'>{servicesArr[i].name}</span>
          <span className='service__cost'>{servicesArr[i].cost}</span>
        </li>
      );
    }

    return servicesDomArr;
  }

  render() {
    return (
      <ul className='service__list m-b-100'>
        {this.renderServices()}
      </ul>
    );
  }
}
