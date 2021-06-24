import React from 'react';
import Slider from 'react-slick';

export default class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      let images = []
      for (let i = 0; i < this.props.fields.images.length; i++) {
        images.push(`https:${this.props.fields.images[i].fields.image.fields.file.url}`)
      }
      console.log(images);
      var settings = {infinite: true, speed: 400, slidesToShow: 1, slidesToScroll: 1}
      return (
        <Slider {...settings} className='slider-carousel' data-content-type='imageCarousel'>
          {images.map((image) => (
              <div className='individual-carousel-container'>
                
                <img src={image} className='individual-carousel' />
              </div>
            )
          )}
        </Slider>
      )
  }
}
