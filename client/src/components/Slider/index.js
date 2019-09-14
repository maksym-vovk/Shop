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
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <Slider {...settings}>
      <div className="slide">
        <div className="text">
          <h2>The sound of freedom.</h2>
          <p>Engraving available exclusively online.</p>
        </div>
        <img src="static/img/slider/6.png" alt="macbook" />
      </div>
      <div className="slide">
        <div className="text">
          <h2>
            Choose the
            <br />
            Apple Watch
            <br />
            that’s right
            <br />
            for you.
          </h2>
        </div>
        <img src="static/img/slider/7.png" alt="macbook" />
      </div>
      <div className="slide">
        <div className="text">
          <h2>The sound of freedom.</h2>
          <p>Engraving available exclusively online.</p>
        </div>
        <img src="static/img/slider/6.png" alt="macbook" />
      </div>

      {/* <div>
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
      </div> */}
    </Slider>
  );
};
