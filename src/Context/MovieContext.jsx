import { createContext, useState } from "react";

export const MovieContext = createContext(null);


const MovieContextProvider = (props) => {
    const [movies, setMovies] = useState([]);

    const contextValue = {  movies, setMovies };

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;