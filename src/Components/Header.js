import React from 'react';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    return (
        <header>
          <span className='logotype'>MODIFY HAIR LOUNGE</span>
          <Nav />
        </header>
    );
  }
}
