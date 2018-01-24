import React from 'react';
import { Link } from 'react-router-dom';
import { getStylists } from '../Services/Data';

export default class Header extends React.Component {

  renderStylists() {
    const stylists = getStylists();
    let stylistArr = [];

    for (let i = 0; i <= stylists.length; i++) {
      let item = stylists[i];

      if (item) {
        stylistArr.push(
          <div key={`item-${i}`} className='stylist-wrapper'>
            <Link key={`stylist${i}`} to={`/stylists/${item.name.toLowerCase()}`} className='stylist'>
              <div className='stylist__img-wrapper'>
                <img className='stylist__img' src={item.image} alt={`portrait of ${item.name}`} />
              </div>
              <div className='stylist__info'>
                <span className='stylist__info--name'>{item.name}</span>
                <span className='stylist__info--position'>{item.position}</span>
              </div>
            </Link>
          </div>
        );
      }
    }

    return stylistArr;
  }

  render() {
    return (
      <div className='stylist-gallery'>
        {this.renderStylists()}
      </div>
    );
  }
}
