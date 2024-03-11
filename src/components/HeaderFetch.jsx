import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeaderFetch({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'cd6592beb58e675d2cb6fdf038c87822';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {children && children(movies)}
    </div>
  );
}

export default HeaderFetch;