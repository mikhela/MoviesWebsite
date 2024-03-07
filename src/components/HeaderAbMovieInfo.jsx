import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import '../styles/header.css'

function HeaderAbMovieCarousel() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'cd6592beb58e675d2cb6fdf038c87822';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );
        const data = response.data.results.slice(0, 20); // Limiting to 20 movies
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        Next
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        Prev
      </div>
    );
  };

  return (
    <div className="carousel-container">

      <Slider {...settings}>
        {movieDetails.map(movie => (
          <div key={movie.id} className="carousel-item">
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              
            )}
          </div>
        ))}
      </Slider>

   
    </div>

    
  );
}

export default HeaderAbMovieCarousel;
