import React from 'react';
import { Link } from 'react-router-dom';
import { stylistArr } from '../Services/Data';

export default class Header extends React.Component {
  
  renderStylists() {
    const newArr = stylistArr();
    let stylistDomArr = [];

    for (let i = 0; i <= newArr.length; i++) {  
      let item = newArr[i];

      if(item) {
        stylistDomArr.push (
          <div key={`item-${i}`} className='stylist-wrapper'>
            <Link key={`stylist${i}`} to={`/stylists/${item.name.toLowerCase()}`} className='stylist'>
              <img className='stylist__img' src={item.image} alt={`portrait of ${item.name}`} />
              <span className='stylist__name'>{item.name}</span>
              <span className='stylist__position'>{item.position}</span>
            </Link>
          </div>
        );
      }
    }

    return stylistDomArr;
  }

  render() {
    return (
        <div className='stylist-gallery'>
          {this.renderStylists()}
        </div>
    );
  }
}
