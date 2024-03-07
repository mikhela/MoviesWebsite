import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HeaderFetch({ movieId, children }) {
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiKey = 'cd6592beb58e675d2cb6fdf038c87822';

    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails && children(movieDetails)}
    </div>
  );
}

export default HeaderFetch;
