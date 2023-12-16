import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../carousel/CarouselPromo.css'

export const CarouselPromoFooter = () => {

  return (
    <Carousel className='top'>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/bannerfooter_1.webp" alt="PromoFooter 1"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/bannerfooter_2.webp" alt="PromoFooter 2"/>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className='d-block w-100' src="/bannerfooter_3.webp" alt="PromoFooter 3"/>
      </Carousel.Item>
    </Carousel>
  )
};
