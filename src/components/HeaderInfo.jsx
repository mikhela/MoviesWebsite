import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import "../styles/HeaderInfo.css";

function HeaderInfo() {
  const [movieIndex, setMovieIndex] = useState(0);
  const {
    data: movies,
    isLoading,
    error,
  } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const movie = movies[movieIndex];
  return (
    <div className="header--info">
      <div className="left__image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="information">
        <div className="innerinformation">
          <h2 id="title">{movie.title}</h2>
          <p className="overview">{movie.overview}</p>

          <div className="innerBox">
            <p id="vote">
              <span id="imdb">IMDb</span> {movie.vote_average}
            </p>
            <p>Popularity: {movie.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderInfo;
