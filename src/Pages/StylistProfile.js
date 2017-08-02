import React from 'react';
import { getStylists } from '../Services/Data';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

export default class StylistProfile extends React.Component {
  
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

    let classes = [
      'profile__button',
      this.props.navFixed ? 'profile__button--fixed' : null
    ];
    
    return (
      <div>
        <div className={classNames(classes)}>
          <button className='button'><NavLink className='button__nav-link' to='/stylists'>Back To Stylists</NavLink></button>
        </div>
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
      </div>
    );
  }
}
