import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-50'>If you need anything at all, don't hesitate to send us a message and we'll get back to you as soon as we can!</p>
        <form className='form' name="contact" data-netlify="true">
          <div className='form__column'>
            <label className='label' htmlFor='name'>Name</label>
            <input className='input' id='name' />
            <label className='label' htmlFor='title'>Subject</label>
            <input className='input' id='title' />
          </div>
          <div className='form__column m-b-50'>
            <label className='label' htmlFor='message'>Message</label>
            <textarea className='textarea' rows={6} id='message' />
          </div>
          <div className='form__column'>
            <button type="submit" className='button button--alt'>Send</button>
          </div>
        </form>
      </div>
    );
  }
}
