import React from 'react';
import { getStylists } from '../Services/StylistData';
import PriceList from '../Components/PriceList';
import { NavLink } from 'react-router-dom';

export default class StylistProfile extends React.Component {
  componentWillMount() {
    this.props.setCurrentStylist(this.props.match.params.name);
  }

  componentWillUnmount() {
    this.props.setCurrentStylist('');
  }

  renderBio(stylist) {
    if (stylist.bio) {
      let bio = [];

      for (let i = 0; i < stylist.bio.length; i++) {
        bio.push(
          <p key={`bio-p-${i}`} className='p p--dark'>{stylist.bio[i]}</p>
        );
      }

      return bio;
    }
  }

  renderPriceList(stylist) {
    if (stylist.pricing) {
      return <PriceList pricing={stylist.pricing} />
    }
  }

  renderContactInfo(stylist) {
    const contactData = [];
    const maleStylist = stylist.name === "Mitch";

    const websiteText = <span key='websiteText'>visit {maleStylist ? 'his' : 'her'} <a className='profile__link' href={stylist.website}>website</a></span>;
    const phoneText = <span key='phoneText'>call{stylist.name !== "Robin" ? '/text' : null} {maleStylist ? 'him' : 'her'} at <a className='profile__link' href={`tel:${stylist.phone}`}>{stylist.phone}</a></span>;
    const emailText = <span key='emailText'>send {maleStylist ? 'him' : 'her'} an <a href={`mailto:${stylist.email}`}>email</a></span>;

    const emailPhoneAndWebsite = stylist.website && stylist.email && stylist.phone;
    const emailAndWebsite = stylist.website && stylist.email && !stylist.phone;
    const emailAndPhone = !stylist.website && stylist.email && stylist.phone;
    const phoneAndWebSite = stylist.website && !stylist.email && stylist.phone;
    const email = !stylist.website && stylist.email && !stylist.phone;
    const phone = !stylist.website && !stylist.email && stylist.phone;
    const website = stylist.website && !stylist.email && !stylist.phone;

    if (emailPhoneAndWebsite) {
      contactData.push(
        emailText, ' or ',
        phoneText, ' or ',
        websiteText, '.'
      );
    } else if (email) {
      contactData.push(
        emailText, '.'
      );
    } else if (phone) {
      contactData.push(
        phoneText, '.'
      );
    } else if (website) {
      contactData.push(
        websiteText, '.'
      );
    } else if (emailAndWebsite) {
      contactData.push(
        websiteText, ' or ',
        emailText, '.'
      );
    } else if (emailAndPhone) {
      contactData.push(
        emailText, ' or ',
        phoneText, '.'
      );
    } else if (phoneAndWebSite) {
      contactData.push(
        websiteText, ' or ',
        phoneText, '.'
      );
    }

    return (
      <p className='p p--dark p--small profile__data'>
        {stylist.schedule ? stylist.schedule : null}<br />
        To schedule an appointment with {stylist.name},&nbsp;
        {contactData}
      </p>
    );
  }

  render() {
    let stylist = getStylists(this.props.match.params.name);
    // TODO Make this string gender based
    const instagramText = stylist.instagram ?
      <p className='p p--dark'>Check out her instagram profile at <a href={`https://instagram.com/{stylist.instagram}`}>{stylist.instagram}</a>.</p> :
      null;

    return (
      <div className='content-flex'>
        <div className='profile__button'>
          <NavLink className='nav-link__button nav-link__button--alt' to='/stylists'>&#12296; All Stylists</NavLink>
        </div>
        <div className='profile'>
          <div className='profile__column'>
            <h1 className='profile__name'>{stylist.name}</h1>
            <p className='profile__position'>{stylist.position}</p>
          </div>
          <div className='profile__column'>
            <img className='profile__image m-b-50' src={stylist.image} alt={`Portrait of ${stylist.name}`} />
            {this.renderContactInfo(stylist)}
          </div>
          <div className='profile__column'>
            {this.renderPriceList(stylist)}
            {this.renderBio(stylist)}
            {instagramText}
          </div>
        </div>
      </div>
    );
  }
}
