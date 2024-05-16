import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/HeaderCarousel.css';
import useFetch from './useFetch'; 
import '../assets/arrow-left-solid.svg'
import '../assets/arrow-right-solid.svg'
import Cards from './Cards';

function HeaderCarousel() {
  const { data: movies, isLoading, error } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822');

  const sliderRef = useRef(null); 

  

  const calculateSlidesToShow = () => {
    const smallWidth = window.innerWidth;
    return smallWidth > 1200 ? 5.2   : 3.1;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 2,
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="carousel-container">
      {movies.length > 0 && ( 
        <Slider ref={sliderRef} {...settings}>
          {movies.map(movie => (
            <Cards key={movie.id} movie={movie} />
          ))}
        </Slider>
      )}
    </div>
  );
}

export default HeaderCarousel;
