import React from 'react';
import { NavLink } from 'react-router-dom';
import { getProducts } from '../Services/Data';

export default class Products extends React.Component {
  renderProductDesc(desc) {
    const descArr = [];

    for (let i = 0; i < desc.length; i++) {
      descArr.push(
        <p key={i} className='p p--dark'>{desc[i]}</p>
      );
    }

    return descArr;
  }

  renderProducts() {
    let productArr = [];
    let PRODUCTS = getProducts();

    for (let i = 0; i < PRODUCTS.length; i++) {
      productArr.push(
        <div key={i} className='profile profile--column'>
          <img className='profile__image profile__image--wide m-b-100' src={PRODUCTS[i].image} alt={`${PRODUCTS[i].name} logo`} />
          <div className='m-b-50'>
            {this.renderProductDesc(PRODUCTS[i].desc)}
          </div>
          <img className='profile__image profile__image--wide m-b-50' src={PRODUCTS[i].productImage} alt='product' />
          <p className='p p--dark p--center m-b-200'>For more information visit <a className='a' href={PRODUCTS[i].url}>{PRODUCTS[i].name}</a></p>
        </div>
      );
    }

    return productArr;
  }

  render() {
    return (
      <div className='content-flex'>
        {this.renderProducts()}
        <NavLink className='nav-link__button nav-link__button--alt' to='/stylists'>Find My Stylist</NavLink>
      </div>
    );
  }
}
