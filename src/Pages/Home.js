import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageGallery from '../Components/ImageGallery';

export default class Home extends React.Component {
  render() {
    return (
      <div className='content-flex'>
        <p className='p p--dark m-b-50'>Modify Hair Lounge is an intimate and welcoming six chair salon that focuses on attention to each individual client. Each stylist is an independent contractor which allows them to really focus on their personal clientele while having the ability to show their individual personality. Our goal is to provide a space with diversity in customers where they can feel comfortable to relax and unwind as well as catering to the promotion of a neighborhood community.</p>
        <p className='p p--dark m-b-50'>We welcome booking appointments with new customers by phone. Although we do accept walk-ins, it is always best to make an appointment in advance for best availability. If you already know your stylist, feel free to contact them directly to book an appointment. Individual service price lists, as well as contact information can be found on the stylist’s page.</p>
        <NavLink className='nav-link__button nav-link__button--alt m-b-100' to='/stylists'>Find My Stylist</NavLink>
        <ImageGallery />
        <NavLink className='nav-link__button nav-link__button--alt' to='/services'>Our Services</NavLink>
      </div>
    );
  }
}
