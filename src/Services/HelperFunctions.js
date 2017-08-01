export function throttle(callback, wait) {
  var time = Date.now();
  
  return function() {
    if ((time + wait - Date.now()) < 0) {
      callback();
      time = Date.now();
    }
  }
}

export function hideLoadingIndicator () {
  const indicator = document.getElementById('progress-indicator'); 
  indicator.classList.add('available');
}
