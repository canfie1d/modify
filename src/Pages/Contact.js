import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <form className='form'>
          <label className='label' htmlFor='name'>Name:</label>
          <input className='input' id='name' />
          <label className='label' htmlFor='title'>Title:</label>
          <input className='input' id='title' />
          <label className='label' htmlFor='message'>Message:</label>
          <textarea className='textarea' id='message' />
          <button className='button button--alt'>Send</button>
        </form>
      </div>
    );
  }
}
