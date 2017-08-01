import React from 'react';

export default class Home extends React.Component {
  
  render() {

    return (
      <div>{this.props.match.params.name}'s PROFILE</div>
    );
  }
}
