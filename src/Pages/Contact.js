import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const encode = (data) => {
      return Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-50'>If you need anything at all, don't hesitate to send us a message and we'll get back to you as soon as we can!</p>
        <form className='form' onSubmit={this.handleSubmit}>
          <div className='form__column'>
            <label className='label' htmlFor='name'>Name</label>
            <input className='input' name="name" id='name' type='text' required value={this.state.name} onChange={this.handleChange} />
            <label className='label' htmlFor='email'>Email</label>
            <input className='input' name="email" id='email' type='email' required value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className='form__column m-b-50'>
            <label className='label' htmlFor='message'>Message</label>
            <textarea className='textarea' name='message' rows={6} id='message' required value={this.state.message} onChange={this.handleChange} />
          </div>
          <div className='form__column'>
            <button type="submit" className='button button--alt'>Send</button>
          </div>
        </form>
      </div>
    );
  }
}
