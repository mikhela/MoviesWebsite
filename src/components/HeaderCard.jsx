import React from 'react';
import useFetch from './useFetch';  
import '../styles/headerCard.css';

function HeaderCard({ movie }) {

  return (
    <div className="header-card">
      <div className="header-card-item">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <div className="details">
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
    </div>
  );
}

export default HeaderCard;
