import React from 'react';
import { NavLink } from 'react-router-dom';
import modifyIcon from '../Assets/Images/modify_icon.png';

export default class Nav extends React.Component {

  render() {

    return (
      <nav id='nav' className={'nav'}>
        <ul>
          <li className='nav__item nav__item__logo'>
            <NavLink exact activeClassName='current' to='/'>
              <img className='nav__image' src={modifyIcon} alt='Modify Hair Lounge Logo' />
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink exact activeClassName='current' to='/services'>Services</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink activeClassName='current' to='/stylists'>Stylists</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink exact activeClassName='current' to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
