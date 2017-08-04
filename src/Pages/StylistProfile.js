import React from 'react';
import { getStylists } from '../Services/Data';


export default class StylistProfile extends React.Component {
  componentWillMount() {
    this.props.setCurrentStylist(this.props.match.params.name);
  }

  componentWillUnmount() {
    this.props.setCurrentStylist('');
  }

  render() {
    let stylist = getStylists(this.props.match.params.name);

    let stylistBio = () => {
      if (stylist.bio) {
        let bioDom = [];

        for (let i = 0; i< stylist.bio.length; i++) {
          bioDom.push(
          <p key={`bio-p-${i}`} className='p p--dark'>{stylist.bio[i]}</p>
        );
        }

        return bioDom;
      }
    };

    return (
      <div className='content-flex'>
        <div className='profile'>
          <div className='profile__column'>
            <img className='profile__image' src={stylist.image} alt=''/>
            <h1 className='profile__name'>{stylist.name}</h1>
            <p className='profile__position'>{stylist.position}</p>
            {stylist.instagram ? <a className='profile__instagram' href={`http://instagram.com/${stylist.instagram}`}>Instagram</a> : null}
          </div>
          <div className='profile__column'>
            {stylistBio()}
            <p className='p p--dark'>
              {stylist.contact}
              {stylist.website ? <a className='indent profile__link' href={stylist.website} >her website</a> : <a className='indent profile__link' href={`tel:${stylist.phone}`}>{stylist.phone}</a> }
              {stylist.email ? <a href={`mailto:${stylist.email}`}>email</a> : null}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
