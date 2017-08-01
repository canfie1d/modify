import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../Pages/Home';
import { toggleNavFixedState } from '../Actions/Nav.js';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
