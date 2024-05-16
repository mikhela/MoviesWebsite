import "../styles/HeaderCard.css"

const Cards = ({ movie }) => {
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

export default Cards;