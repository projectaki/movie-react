import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Navbar/Footer";
import "./MovieCardHolder.css";

const MovieCardHolder = (props) => {
  return (
    <div className="movie-container">
      {props.movies.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
      <Footer />
    </div>
  );
};

export default MovieCardHolder;
