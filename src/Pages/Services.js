import React from 'react';
import ServiceMenu from '../Components/ServiceMenu';
import { NavLink, Link } from 'react-router-dom';

export default class Services extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-100'>All of our stylists are independent contractors and prices vary dependent on each individual stylist. To see each stylists specific price details, view their <Link to='/stylists'>profiles</Link>.</p>
        <ServiceMenu />
        <NavLink className='nav-link__button nav-link__button--alt' to='/products'>View Our Products</NavLink>
      </div>
    );
  }
}
