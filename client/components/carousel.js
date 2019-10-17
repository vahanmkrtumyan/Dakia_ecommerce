import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselComp = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay interval={6000} showThumbs={false}>
        <div>
          <img src="/1.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/1.jpg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/1.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
