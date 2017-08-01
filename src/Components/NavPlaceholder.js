import React from 'react';
import classNames from 'classnames';

export default class NavPlaceholder extends React.Component {
  render() {
    let classes = [
      'nav__placeholder',
      this.props.navFixed ? 'nav__placeholder--active' : null
    ];
    
    return (
      <div className={classNames(classes)} />
    );
  }
}
