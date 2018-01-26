import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../Services/Data';

export default class Products extends React.Component {
  renderProducts(products) {
    let productArr = [];

    for (let i = 0; i < products.length; i++) {
      productArr.push(
        <div key={`product-${i}`} className='product__img-wrapper'>
          <Link to={`/services/${products[i].id}`}>
            <img className='products__img' alt={products[i].alt} src={products[i].image} />
          </Link>
        </div>
      );
    }

    return productArr;
  }

  render() {
    const products = getProducts();

    return (
      <div className='products'>
        {this.renderProducts(products)}
      </div>
    );
  }
}
