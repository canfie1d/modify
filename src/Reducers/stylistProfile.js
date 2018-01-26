export default function stylistProfile(state = { currentStylist: '' }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'SET_CURRENT_STYLIST':
      newState.currentStylist = action.value;
      break;
    default:
      return state;
  }

  return newState;
}
