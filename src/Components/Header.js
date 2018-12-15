import React from 'react';
import Nav from './Nav';
import { withRouter } from 'react-router';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <Nav />
      </header>
    );
  }
}

export default withRouter(Header);
