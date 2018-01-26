import React from 'react';
import { NavLink } from 'react-router-dom';
import { getProducts } from '../Services/Data';

export default class ProductProfile extends React.Component {
  componentWillMount() {
    this.props.setCurrentProduct(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.setCurrentProduct('');
  }

  renderProductDesc(desc) {
    const descArr = [];

    for (let i = 0; i < desc.length; i++) {
      descArr.push(
        <p className='p p--dark'>{desc[i]}</p>
      );
    }

    return descArr;
  }

  render() {
    let product = getProducts(this.props.match.params.id);
    console.log(product);
    return (
      <div className='content-flex'>
        <div className='profile__button'>
          <NavLink className='nav-link__button nav-link__button--alt' to='/services'>&#12296; Services</NavLink>
        </div>
        <div className='profile profile--column'>
          <img className='profile__image profile__image--wide m-b-100' src={product.image} alt={`${product.name} logo`} />
          <div className='m-b-50'>
            {this.renderProductDesc(product.desc)}
          </div>
          <img className='profile__image profile__image--wide m-b-50' src={product.productImage} alt='product' />
          <p className='p p--dark p--center'>For more information visit <a className='a' href={product.url}>{product.name}</a></p>
        </div>
      </div>
    );
  }
}
