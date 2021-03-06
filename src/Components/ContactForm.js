import React from 'react';

export default class ContactForm extends React.Component {
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
      .then(() => {
        this.props.formSent()
        this.setState({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(error => this.props.formSent(error));

    e.preventDefault();
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form__column'>
          <label className='label' htmlFor='name'>What's your name?</label>
          <input
            id='name'
            name='name'
            type='text'
            className='input'
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label className='label' htmlFor='email'>What's your email address?</label>
          <input
            id='email'
            name='email'
            type='email'
            className='input'
            placeholder="Enter your email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form__column m-b-50'>
          <label className='label' htmlFor='message'>How can we help?</label>
          <textarea
            id='message'
            name='message'
            className='textarea'
            rows={5}
            placeholder="Enter your message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form__column'>
          <button type='submit' className='button button--alt'>Send</button>
        </div>
      </form>
    );
  }
}
