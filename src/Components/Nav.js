import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink exact activeClassName='current' to='/'>Home</NavLink></li>
          <li><NavLink activeClassName='current' to='/services'>Services</NavLink></li>
          <li><NavLink activeClassName='current' to='/stylists'>Stylists</NavLink></li>
          <li><NavLink exact activeClassName='current' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}
