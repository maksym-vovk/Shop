import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import './style.scss';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Apple Watch';
    setLoading(false);
  }, []);

  const slides = [];
  for (let i = 1; i <= 3; i++) {
    slides.push(
      <div key={i} className="slider-image-wrapper">
        <img
          className="slider-image"
          src={`static/img/slider/${i}.jpeg`}
          alt="slide"
        />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        className="slider"
      >
        {slides}
      </Carousel>

      <div className="wrap-for-img container">
        <div className="content-watch">
          <div className="img-wrap">
            <img
              className="image"
              src="static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Band/Black/2.jpg"
              alt="origin watch"
            />
          </div>
          <div className='text-wrap'>
            <h2>Apple Watch Origin</h2>
            <p className='text-wrap__content'>This watch has a display that never sleeps. With the new Always-On Retina display, you always see the time and your watch face.</p>
            <Link className='image-link' to="/origin">Order ></Link>
          </div>
        </div>
        <div className="content-watch">
          <div className="img-wrap">
            <img
              className="image"
              src="static/img/watch/Apple_Watch_Nike/Silver_Aluminum_Case_with_Nike_Sport_Loop/Royal_Pulse_Lava_Glow/2.jpg"
              alt="nike watch"
            />
          </div>
          <div className="text-wrap">
            <h2>Apple Watch Nike</h2>
            <p className="text-wrap__content">
              Get connected through sport. Apple Watch Nike is the perfect
              running partner with the Nike Run Club app. Featuring a world of
              workouts, coaching, and motivation to help take your fitness to
              the next level. And with Apple Watch Series 5, every Nike watch
              face is optimized for the new Always-On Retina display.
            </p>
            <Link className="image-link" to="/nike">
              Order >
            </Link>
          </div>
        </div>
        <div className="content-watch">
          <div className="img-wrap">
            <img
              className="image"
              src="static/img/watch/Apple_Watch_Hermes/Stainless_Steel_Case_with_Single_Tour_Deployment_Buckle/Ebene/2.jpg"
              alt="hermes watch"
            />
          </div>
          <div className="text-wrap">
            <h2>Apple Watch Hermès</h2>
            <p className="text-wrap__content">
              A deep collaboration. A dramatic new collection. A partnership
              based on parallel thinking and shared values continues. Now with a
              wide range of new and current Hermès cases and bands, new faces
              designed for the Always-On Retina display, and a special
              combination in all black. Apple Watch Hermès is the ultimate tool
              for modern life — with more than a dash of sophistication.
            </p>
            <Link className="image-link" to="/hermes">
              Order >
            </Link>
          </div>
        </div>
        <div className="content-watch">
          <div className="img-wrap">
            <img
              className="image"
              src="static/img/watch/Apple_Watch_Edition/Titanium_Case_with_Sport_Loop/Pride/2.jpg"
              alt="edition watch"
            />
          </div>
          <div className="text-wrap">
            <h2>Apple Edition Watch</h2>
            <p className="text-wrap__content">
              Introducing titanium. Reintroducing ceramic. The most elegant
              expression of Apple Watch returns with two iconic materials —
              titanium and ceramic. Featuring all the innovations of Series 5
              and the craftsmanship of traditional watchmaking. It’s as modern
              as can be and as classic as it gets.
            </p>
            <Link className="image-link" to="/edition">
              Order >
            </Link>
          </div>
        </div>
        <Lines customLoading={loading} time={300} />
      </div>
    </React.Fragment>
  );
};
