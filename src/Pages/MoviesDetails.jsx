import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { useParams } from "react-router-dom";
import "../styles/MoviesDetails.css"
import ErrorPage from "./ErrorPage";
import HeaderCarousel from "../components/HeaderCarousel.jsx"
const MoviesDetails = () => {
    const { moviesData } = useContext(MovieContext); 
    const { movieId } = useParams(); 
    const movie = moviesData.find((movie) => movie.id === Number(movieId));

    return (
        <div>
            {movie ? (
                <div className="MoviesDetails">
                    <div className="movieBanner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}></div>
                    <div className="information__Container">
                        <div className="content_left" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}></div>
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
            ) : (
                <ErrorPage />
            )}
        </div>
    );
}

export default MoviesDetails;
