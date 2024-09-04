import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useParams } from "react-router-dom";
import "../styles/MoviesDetails.css"

const MoviesDetails = () => {
    const { movies } = useContext(MovieContext); 
    const { movieId } = useParams(); 
    const movie = movies.find((movie) => movie.id === Number(movieId));

    // Check if the movie exists before rendering the details
    if (!movie) {
        return <div>Movie not found or still loading...</div>;
    }

    return (
        <div>
            <div className="MoviesDetails">
                <div 
                    className="movieBanner" 
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                </div>
                <div className="information__Container">
                    <div 
                        className="content_left" 
                        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})` }}>
                    </div>
                    <div className="content_right">
                        <h2 id="title">{movie.title}</h2>
                        <p id="overview">Overview: {movie.overview}</p>
                        <div className="content_right_mininfo">
                            <p id="date">Release date: {movie.release_date}</p>
                            <p id="vote"><span id="imdb"> IMDb</span><span id="voteAv">{movie.vote_average}</span></p>
                            <p id="popularity">Popularity: {movie.popularity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoviesDetails;
