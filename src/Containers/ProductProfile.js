import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductProfile from '../Pages/ProductProfile';
import { setCurrentProduct } from '../Actions/productProfile.js';

function mapStateToProps(state) {
  return {
    currentProduct: state.profile.currentProduct
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setCurrentProduct
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductProfile);
