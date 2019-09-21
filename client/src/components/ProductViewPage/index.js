import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

export const ProductViewPage = props => {
  const { state } = props.location;
  console.log(state);
  const [slides, setSlides] = useState(
    Object.entries(state.colors.bandImagesByColor)[0][1]
  );
  console.log(slides);

  const sliderImages = slides.map((item, key) => {
    return (
      <div key={key}>
        <img src={item} alt={state.filter.category} style={{ width: '100%' }} />
      </div>
    );
  });

  const PreviewCarousel = () => {
    return <Carousel showIndicators={false}>{sliderImages}</Carousel>;
  };

  const tabClickHandler = e => {
    const images = state.colors.bandImagesByColor;
    const data = e.target.dataset.name;
    setSlides(images[data]);
  };

  const ColorTabs = () => {
    return (
      <div>
        {state.colors.allColors.map((item, index) => {
          return (
            <span key={index} onClick={tabClickHandler}>
              <img
                src={item.icon}
                alt={item.name}
                title={item.name}
                data-name={item.dataName}
              />
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section className="product-view">
      <article className="container">
        <h2>ProductViewPage</h2>
        <div className="product-view__wrapper">
          <div className="product-view__carousel" style={{ width: '85%' }}>
            <PreviewCarousel />
          </div>
          <div className="product-view__info">
            <ColorTabs />
          </div>
        </div>
      </article>
    </section>
  );
};

// import React, { useState, useEffect } from 'react';
// import { Lines } from 'react-preloaders';
// import { connect } from 'react-redux';
// import { fetchCard } from '../../store/actions';
// import './index.scss';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const mapStateToProps = state => {
//   return {
//     card: state.products.card
//   };
// };

// export const ProductViewPage = connect(
//   mapStateToProps,
//   { fetchCard }
// )(props => {
//   const { card, fetchCard } = props;
//   const [loading, setLoading] = useState(true);
//   const [images, setImages] = useState();

//   useEffect(() => {
//     fetchCard(props.match.params.id);
//     setLoading(false);
//     console.log('new page');
//   }, [fetchCard, props.match.params.id]);

//   console.log('images', images);

//   const Slider = () => {
//     return (
//       images || Object.entries(card[0].colors.bandImagesByColor)[0][1]
//     ).map((item, index) => {
//       return (
//         <div key={index}>
//           <img src={item} alt={card[0].filter.model} style={{ width: '70%', transition: 'ease 0.5s' }} />
//         </div>
//       );
//     });
//   };

//   const tabClickHandler = e => {
//     const images = card[0].colors.bandImagesByColor;
//     const data = e.target.dataset.name;
//     setImages(images[data]);
//   };

//   const ColorTabs = () => {
//     return (
//       <div>
//         {card[0].colors.allColors.map((item, index) => {
//           return (
//             <span key={index} onClick={tabClickHandler}>
//               <img
//                 src={item.icon}
//                 alt={item.name}
//                 title={item.name}
//                 data-name={item.dataName}
//               />
//             </span>
//           );
//         })}
//       </div>
//     );
//   };

//   const DemoCarousel = () => {
//     return (
//       <Carousel showIndicators={false}>
//         <div>
//           <img src="/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Loop/Pride/1.jpg" />
//         </div>
//         <div>
//           <img src="/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Loop/Pride/2.jpg" />
//         </div>
//         <div>
//           <img src="/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Loop/Pride/3.jpg" />
//         </div>
//       </Carousel>
//     );
//   };

//   return (
//     <React.Fragment>
//       {card ? (
//         <section className="product-view" style={{ padding: '10px 0' }}>
//           <div className="container">
//             <h2 style={{ textAlign: 'left' }}>{card[0].filter.model}</h2>
//           </div>
//           <hr style={{ opacity: '0.5' }} />
//           <article className="product-view__item   container">
//             <div style={{ width: '100%' }}>
//               <Slider />
//             </div>
//             <div style={{ padding: '20px 0' }}>
//               <h2>{card[0].description}</h2>
//               <p>${card[0].minPrice}</p>
//               <p>Band colors</p>
//               <ColorTabs />
//               <DemoCarousel/>
//             </div>
//           </article>
//         </section>
//       ) : null}
//       <Lines customLoading={loading} time={500} />
//     </React.Fragment>
//   );
// });
