import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/HeaderMoviesByGenres.css"
import { Link } from 'react-router-dom';
const useFetch = (genreIds) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822&with_genres=${genreIds}`);
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [genreIds]);

  return { data, isLoading, error };
};

const HeaderMoviesByGenres = () => {
  const genres = [
    { id: 10749, name: "Romance" },
    { id: 35, name: "Comedy" },
    { id: 14, name: "Fantasy" },
    { id: 18, name: "Drama" },
    { id: 53, name: "Thriller" },
    { id: 27, name: "Horror" },
    { id: 16, name: "Animation" },
    { id: 12, name: "Adventure" }
  ];

  const RenderMovies = ({ genre }) => {
    const { data, isLoading, error } = useFetch(genre.id);
    
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div key={genre.id}>
        <div className='GenreMCOntainer'>
        <h2 className='Genrename'>{genre.name}</h2>
        <div className="genrescont">
        {data.map(movie => (
            <div key={movie.id} className="movieCard">
              <Link to={`/MoviesDetails/${movie.id}`}><img className='moviecardimg' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} /></Link>
              <div className="iconWrapper"><div className="innerbord"></div></div>
            </div>
          ))}
        </div>
        
        </div>
      </div>
    );
  };

  return (
    <div>
      {genres.map(genre => <RenderMovies key={genre.id} genre={genre} />)}
    </div>
  );
};

export default HeaderMoviesByGenres;
