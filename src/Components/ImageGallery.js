import React from 'react';
import { GALLERY_IMAGES } from '../Services/Data';

export default class ImageGallery extends React.Component {

  renderImages() {
    let images = [];

    for (let i = 0; i <= GALLERY_IMAGES.length; i++) {
      let item = GALLERY_IMAGES[i];

      if (item) {
        images.push(
          <div key={`gallery-image${i}`} className='img-wrapper'>
            <img className='img' src={item.image} alt={item.alt} />
          </div>
        );
      }
    }

    return images;
  }

  render() {
    return (
      <div className='image-gallery'>
        {this.renderImages()}
      </div>
    );
  }
}
