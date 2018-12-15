import React from 'react';
import { SERVICES } from '../Services/Data';

export default class ServiceMenu extends React.Component {

  renderServices() {
    let services = [];

    for (let i = 0; i < SERVICES.length; i++) {
      services.push(
        <li key={`service-item-${i}`} className='service__item'>
          <span className='service__name'>{SERVICES[i].name}</span>
          <span className='service__cost'>{SERVICES[i].cost}</span>
        </li>
      );
    }

    return services;
  }

  render() {
    return (
      <ul className='service__list m-b-50'>
        {this.renderServices()}
      </ul>
    );
  }
}
