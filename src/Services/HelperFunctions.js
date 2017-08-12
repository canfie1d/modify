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

  let findStyleSheet = function () {
    for (let i = 0; i < document.getElementsByTagName('link').length; i++) {
      if (document.getElementsByTagName('link')[i].rel === 'stylesheet') {
        return document.getElementsByTagName('link')[i];
      }
    }
  }

  let style = findStyleSheet();
  
  let fi = setInterval(function() {
    try {
      // style.sheet.cssRules only populates when file is loaded
      // eslint-disable-next-line
      style.sheet.cssRules ? indicator.classList.add('hidden') : null;
      clearInterval(fi);
    } catch (e) {
    } finally {
      setTimeout( () => {
        indicator.classList.add('hidden');
        clearInterval(fi);
      }, 1000)
    }
  });
}
