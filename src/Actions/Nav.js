export function toggleNavFixedState (value) {
  return dispatch => {
    dispatch({ type: 'TOGGLE_NAV_FIXED_STATE', value })
  }
}
