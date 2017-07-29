import React from 'react';
import classNames from 'classnames';

export default class Hero extends React.Component {
  renderContent() {
    if(this.props.type === 'content') {
      return (
        <div className='hero__content'>
          {this.props.children}
        </div>
      );
    }

    return this.props.children;
  }

  render() {
    return (
        <div className={classNames('hero', this.props.size === 'short' ? 'hero--short' : null)}>
          <div className='hero__image-wrapper'>
            <img className='hero__image' src={this.props.heroImage} alt={this.props.heroImageAlt} />
          </div>
          {this.renderContent()}
        </div>
    );
  }
}