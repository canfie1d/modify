import React from 'react';
import ContactForm from '../Components/ContactForm';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formSent: false,
      formError: null
    };

    this.formSent = this.formSent.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      formSent: false,
      formError: null
    });
  }

  formSent(error) {
    this.setState({
      formSent: true,
      formError: error || null
    });
  }

  renderFormMessage() {
    if (this.state.formSent) {
      if (this.state.formError !== null) {
        return <p className='p p--error'>I'm sorry, your message could not be sent.</p>;
      }
      return <p className='p p--success'>Thanks! Your message was sent successfully.</p>;
    }
  }

  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-50'>If you need anything at all, don't hesitate to send us a message and we'll get back to you as soon as we can!</p>
        {this.renderFormMessage()}
        <ContactForm formSent={this.formSent} />
      </div>
    );
  }
}
