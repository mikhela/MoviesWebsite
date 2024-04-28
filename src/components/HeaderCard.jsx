import React from 'react';
import useFetch from './useFetch';  
import "../styles/HeaderCard.css"
import { Link } from 'react-router-dom';
function HeaderCard({ movie }) {



  return (
    <div className="header-card">
      <div className="header-card-item">
      <Link to={`/MoviesDetails/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
      <div className="details">
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
    </div>
  );
}

export default HeaderCard;
