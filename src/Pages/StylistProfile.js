import React from 'react';

export default class Home extends React.Component {
  
  render() {

    return (
      <div className='page-wrapper'>
        <main className='page__content'>
          {this.props.match.params.name}'s PROFILE
        </main>
      </div>
    );
  }
}
