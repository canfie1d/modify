import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavFixedState } from '../Actions/Nav.js';

function mapStateToProps (state) {
  return {
    navFixed: state.nav.navFixed
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleNavFixedState
  }, dispatch);
}

class Header extends React.PureComponent {
  render() {
    return (
        <header>
          <span className='logotype'>MODIFY HAIR LOUNGE</span> {/* visually hidden */}
          <Nav toggleNavFixedState={this.props.toggleNavFixedState} navFixed={this.props.navFixed} location={this.props.location.pathname} />
        </header>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
