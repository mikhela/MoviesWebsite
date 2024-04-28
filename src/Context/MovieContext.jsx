import { createContext } from "react";
import useFetch from "../components/useFetch";
export const MovieContext = createContext(null);


const MovieContextProvider = (props) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=cd6592beb58e675d2cb6fdf038c87822';

    const { data } = useFetch(url);

    const contextValue = { moviesData: data };

    return (
        <MovieContext.Provider value={contextValue}>
            {props.children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;