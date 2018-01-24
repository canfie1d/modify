import React from 'react';
import { getStylists } from '../Services/Data';
import PriceList from '../Components/PriceList';

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

  render() {
    let stylist = getStylists(this.props.match.params.name);

    return (
      <div className='content-flex'>
        <div className='profile'>
          <div className='profile__column'>
            <h1 className='profile__name'>{stylist.name}</h1>
            <p className='profile__position'>{stylist.position}</p>
          </div>
          <div className='profile__column'>
            <img className='profile__image m-b-50' src={stylist.image} alt='' />
            <p className='p p--dark p--small stylist__data'>
              {stylist.contact}
              {stylist.website ? <a className='indent profile__link' href={stylist.website} >her website.</a> : <a className='indent profile__link' href={`tel:${stylist.phone}`}>{stylist.phone}.</a>}
              {stylist.email ? <a href={`mailto:${stylist.email}`}>email</a> : null}
              {stylist.instagram ? <span className='profile__instagram'>Visit {stylist.name} on <a href={`http://instagram.com/${stylist.instagram}`}>Instagram</a></span> : null}
            </p>
          </div>
          <div className='profile__column'>
            {this.renderPriceList(stylist)}
            {this.renderBio(stylist)}
          </div>
        </div>
      </div>
    );
  }
}
