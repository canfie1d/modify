import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageTemplate from '../Pages/PageTemplate';
import { toggleNavFixedState, setCurrentStylist } from '../Actions/Nav.js';
import { withRouter } from 'react-router-dom';

function mapStateToProps (state) {
  return {
    navFixed: state.nav.navFixed,
    currentStylist: state.nav.currentStylist
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleNavFixedState,
    setCurrentStylist
  }, dispatch);
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PageTemplate));
