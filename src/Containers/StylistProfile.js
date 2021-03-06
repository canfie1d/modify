import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StylistProfile from '../Pages/StylistProfile';
import { setCurrentStylist } from '../Actions/stylistProfile.js';

function mapStateToProps(state) {
  return {
    currentStylist: state.profile.currentStylist
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentStylist
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylistProfile);
