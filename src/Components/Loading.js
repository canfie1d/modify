import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div className="progress-indicator" id="progress-indicator">
        <div className="progress-indicator-head">
          <div className="first-indicator"></div>
        </div>
        <div className="insp-logo-frame">
          <img className="insp-logo-frame-img" src='../Assets/Images/modify_icon.png' alt='loading...' />
        </div>
      </div>
    );
  }
}
