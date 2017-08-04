export default function navFixedState(state = {navFixed: false, currentStylist: ''} , action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'TOGGLE_NAV_FIXED_STATE':
      newState.navFixed = action.value;
      break;
    case 'SET_CURRENT_STYLIST':
      newState.currentStylist = action.value;
      break;
    default:
      return state;
  }

  return newState;
}
