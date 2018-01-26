import React from 'react';
import animateScrollTo from 'animated-scroll-to';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
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

export default withRouter(ScrollToTop);
