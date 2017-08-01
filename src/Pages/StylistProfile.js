import React from 'react';
import { getStylists } from '../Services/Data';

export default class Home extends React.Component {
  
  render() {
    let stylist = getStylists(this.props.match.params.name);
    console.log('STLYIST', stylist);
    return (
      <div>
        <img src={stylist.image} alt=''/>
        <p className='p p--dark'>{stylist.name}</p>
        <p className='p p--dark'>{stylist.position}</p>
        <p className='p p--dark'>{stylist.bio}</p>
        <p className='p p--dark'>{stylist.bio}</p>
        <p className='p p--dark'>{stylist.contact}</p>
        <p className='p p--dark'>{stylist.instagram}</p>
      </div>
    );
  }
}
