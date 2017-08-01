import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleNavFixedState } from '../Actions/Nav.js';
import classNames from 'classnames';

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
      <div className={classNames('nav__placeholder', this.props.navFixed ? 'nav__placeholder--active' : null)} />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
