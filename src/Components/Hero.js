import React from 'react';
import classNames from 'classnames';

export default class Hero extends React.Component {
  render() {
    return (
      <div className={classNames('hero', this.props.size === 'short' ? 'hero--short' : null)}>
        <div className='hero__image-wrapper'>
          <img className='hero__image' src={this.props.heroImage} alt={this.props.heroImageAlt} />
        </div>
      </div>
    );
  }
}
