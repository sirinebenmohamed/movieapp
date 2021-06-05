import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ moviesList, searchByName, searchByRate }) => {
    return (
        <div className="movie-list">
            {moviesList
                .filter((el) => el.name.toLowerCase().includes(searchByName.toLowerCase().trim()) && el.rating >= searchByRate)
                .map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
        </div>
    );
};

export default MovieList;
