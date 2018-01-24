import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { throttle } from '../Services/HelperFunctions';
import modifyIcon from '../Assets/Images/modify_icon.png';

export default class Nav extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', throttle(() => {
      let scroll = window.pageYOffset;

      let under = window.innerHeight - 300 >= scroll;
      let over = window.innerHeight + 300 <= scroll;
      let outOfBounds = (over && !under) || (!over && under);

      if (outOfBounds) {
        return null;
      } else if (!outOfBounds && scroll >= window.innerHeight - 100) {
        this.props.toggleNavFixedState(true);
      } else if (!outOfBounds && scroll <= window.innerHeight - 100) {
        this.props.toggleNavFixedState(false);
      }
    }, 10));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle(() => { }, 0));
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
            <NavLink exact activeClassName='current' to='/'><img className='nav__image' src={modifyIcon} alt='Modify Hair Lounge Logo' /><span className='visually-hidden'>Home</span></NavLink>
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
