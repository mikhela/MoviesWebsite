import React, { useState, useEffect, useContext, useRef } from 'react';
import HeaderCard from "../components/HeaderCard";
import "../styles/Movies.css";
import { MovieContext } from '../Context/MovieContext';
import useFetch from '../components/useFetch';

const Movies = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const [page, setPage] = useState(1);
  const { data: movieData, isLoading, error } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822&page=${page}`);

  useEffect(() => {
    if (movieData) {
      const newMovies = movieData.filter(newMovie => !movies.some(existingMovie => existingMovie.id === newMovie.id));
      setMovies(prevMovies => [...prevMovies, ...newMovies]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieData]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className="MoviesPage__container">
        <div className="containerFor_movies">
          {movies.map(movie => (
            <HeaderCard key={movie.id} movie={movie} />
          ))}
        </div>
        <button id='moreMovies' onClick={handleLoadMore}>Load More</button>
      </div>
    </div>
  );
}

export default Movies;
