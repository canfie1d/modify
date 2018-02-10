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
      .then(() => this.props.formSent())
      .catch(error => this.props.formSent(error));

    if (this.props.formSent && this.props.formError === null) {
      this.setState({
        name: "",
        email: "",
        message: ""
      });
    }

    e.preventDefault();
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <div className='form__column'>
          <label className='label' htmlFor='name'>Name</label>
          <input
            id='name'
            name='name'
            type='text'
            className='input'
            placeholder="What is your name?"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label className='label' htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            className='input'
            placeholder="What is your email? (we keep this very private)"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className='form__column m-b-50'>
          <label className='label' htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            className='textarea'
            rows={5}
            placeholder="How can we help?"
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
