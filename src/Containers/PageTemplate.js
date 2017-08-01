import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTemplate from '../Pages/PageTemplate';
import { toggleNavFixedState } from '../Actions/Nav.js';
import { withRouter } from 'react-router-dom';

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

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate));
