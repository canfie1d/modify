import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Services from '../Pages/Services';
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
)(Services);
