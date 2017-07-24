import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import StylistProfile from '../Pages/StylistProfile';
import { addNumber, subtractNumber } from '../Actions/Number.js';

function mapStateToProps (state) {
  return {
    number: state.number.value
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addNumber,
    subtractNumber
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StylistProfile);
