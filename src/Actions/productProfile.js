export function setCurrentProduct(value) {
  return dispatch => {
    dispatch({ type: 'SET_CURRENT_PRODUCT', value })
  }
}
