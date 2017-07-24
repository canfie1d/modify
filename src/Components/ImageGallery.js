import React from 'react';
import { galleryArr } from '../Services/Data';

export default class Header extends React.Component {
  
  renderImages() {
    const newArr = galleryArr();
    let galleryDomArr = [];

    for (let i = 0; i <= newArr.length; i++) {  
      let item = newArr[i];

      if(item) {
        galleryDomArr.push (
          <div key={`gallery-image${i}`} className='img-wrapper'>
            <img className='img' src={item.image} alt={item.alt} />
          </div>
        );
      }
    }

    return galleryDomArr;
  }

  render() {
    return (
        <div className='image-gallery'>
          {this.renderImages()}
        </div>
    );
  }
}
