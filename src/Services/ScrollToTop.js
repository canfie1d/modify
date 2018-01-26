import React from 'react';
import animateScrollTo from 'animated-scroll-to';

export default class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      animateScrollTo(window.innerHeight - this.props.offset, { speed: 500, minDuration: 500 });
    }
  }

  render() {
    return null;
  }
}

ScrollToTop.defaultProps = {
  offset: 0
}
