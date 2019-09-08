import React from 'react';
import Slider from 'react-slick/lib';

// styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

export const HomePageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="static/img/slider/1.png" alt="macbook" />
      </div>
      <div>
        <img src="static/img/slider/2.png" alt="macbook" />
      </div>
      <div>
        <img src="static/img/slider/3.png" alt="imac" />
      </div>
      <div>
        <img src="static/img/slider/4.png" alt="ipad" />
      </div>
      <div>
        <img src="static/img/slider/5.png" alt="ipad" />
      </div>
    </Slider>
  );
};
