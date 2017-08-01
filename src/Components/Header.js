import React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavFixedState } from '../Actions/Nav.js';
import { withRouter } from 'react-router';

function mapStateToProps (state) {
  return {
    navFixed: state.nav.navFixed,
    routing: state.routing
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleNavFixedState
  }, dispatch);
}

class Header extends React.Component {
  render() {
    return (
        <header>
          <span className='logotype'>MODIFY HAIR LOUNGE</span> {/* visually hidden */}
          <Nav toggleNavFixedState={this.props.toggleNavFixedState} navFixed={this.props.navFixed} />
        </header>
    );
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
