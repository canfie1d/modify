import React, {Component} from 'react';
import animateScrollTo from 'animated-scroll-to';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      animateScrollTo(300);
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default ScrollToTop;
