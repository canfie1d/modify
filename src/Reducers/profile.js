export default function profile(state = { currentStylist: '', currentProduct: '' }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'SET_CURRENT_STYLIST':
      newState.currentStylist = action.value;
      break;
    case 'SET_CURRENT_PRODUCT':
      newState.currentProduct = action.value;
      break;
    default:
      return state;
  }

  return newState;
}
