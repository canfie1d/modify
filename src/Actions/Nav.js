export function toggleNavFixedState (value) {
  return dispatch => {
    dispatch({ type: 'TOGGLE_NAV_FIXED_STATE', value })
  }
}

export function setCurrentStylist (value) {
  return dispatch => {
    dispatch({ type: 'SET_CURRENT_STYLIST', value})
  }
}
