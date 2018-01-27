import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoadableStylistProfile from './LoadableStylistProfile';
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
)(LoadableStylistProfile);
