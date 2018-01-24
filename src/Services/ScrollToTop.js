import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      animateScrollTo(window.innerHeight, { speed: 500, minDuration: 500 });
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default ScrollToTop;
