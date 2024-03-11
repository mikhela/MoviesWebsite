import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/headerCarousel.css';
import HeaderCard from './HeaderCard';

function HeaderCarousel({ movies }) {
  const sliderRef = useRef(null); // Reference to the Slider component

  const handleNext = () => {
    sliderRef.current.slickNext(); // Move to the next slide
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Move to the previous slide
  };

  const calculateSlidesToShow = () => {
    const smallWidth = window.innerWidth;
    return smallWidth > 1200 ? 4.5 : 3.3;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {movies.map(movie => (
          <div key={movie.id} className="carousel-item">
            <HeaderCard movie={movie} />
          </div>
        ))}
      </Slider>
      <div className="Slider--buttons">
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default HeaderCarousel;
