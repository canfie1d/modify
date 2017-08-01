import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label className='label' htmlFor='name'>Name:</label>
          <input className='input' id='name' />
          <label className='label' htmlFor='title'>Title:</label>
          <input className='input' id='title' />
          <label className='label' htmlFor='message'>Message:</label>
          <textarea className='textarea' id='message' />
          <button className='button button--dark'>Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
