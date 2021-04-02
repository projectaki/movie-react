import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Navbar/Footer";
import "./MovieCardHolder.css";
import { Link } from "react-router-dom";

const MovieCardHolder = (props) => {
  return (
    <div className="movie-container">
      {props.movies.map((movie) => (
        <Link
          key={movie.id}
          to={{ pathname: `/MovieProfile/${movie.id}`, movie }}
        >
          <div className="movie-card-wrapper">
            <MovieCard data={movie} />
          </div>
        </Link>
      ))}
      <Footer />
    </div>
  );
};

export default MovieCardHolder;
