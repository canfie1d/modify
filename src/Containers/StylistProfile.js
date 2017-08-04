import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StylistProfile from '../Pages/StylistProfile';
import { toggleNavFixedState, setCurrentStylist } from '../Actions/Nav.js';

function mapStateToProps (state) {
  return {
    currentStylist: state.nav.currentStylist
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleNavFixedState,
    setCurrentStylist
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylistProfile);
