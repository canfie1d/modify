export function setCurrentStylist(value) {
  return dispatch => {
    dispatch({ type: 'SET_CURRENT_STYLIST', value })
  }
}
