import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { throttle } from '../Services/HelperFunctions';
import modifyIcon from '../Assets/Images/modify_icon.png';

export default class Nav extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', throttle(() => {
      let supportPageOffset = window.pageXOffset !== undefined;
      let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      let scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

      if (scroll.y >= window.innerHeight - 100) {
        this.props.toggleNavFixedState(true);
      } else if (scroll.y < window.innerHeight - 100) {
        this.props.toggleNavFixedState(false);
      }
    }, 100));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle(() => {},0));
  }

  render() {
    const classes = [
      'nav',
      this.props.navFixed ? 'nav--fixed' : null
    ];

    return (
      <nav id='nav' className={classNames(classes)}>
        <ul>
          <li className='nav__item nav__item__logo'>
            <NavLink exact activeClassName='current' to='/'><img className='nav__image' src={modifyIcon} alt='Modify Hair Lounge Logo' /></NavLink>
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
