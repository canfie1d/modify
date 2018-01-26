import React from 'react';
import ContactForm from '../Components/ContactForm';
import Map from '../Components/Map';
import { MAP_STYLES } from '../Services/MapStyles';

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
        <div className='contact'>
          <div className='contact-column'>
            <ContactForm formSent={this.formSent} />
          </div>
          <div className='contact-column'>
            <Map center={[-122.341960, 47.658608]} zoom={[13]} mapStyles={MAP_STYLES} />
            <address>
              <p className='p p--dark address__p'>4214 Stone Way N</p>
              <p className='p p--dark address__p'>Seattle, WA 98103</p>
              <a href='tel:206-486-6566' className='a address__a'>206-486-6566</a>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
