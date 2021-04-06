import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieCardHolder.css";
import { Link, useHistory } from "react-router-dom";

const MovieCardHolder = (props) => {
  const history = useHistory();

  const scrollHandler = () => {
    const path = history.location.pathname;
    const pos = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(`scroll${path}`, pos);
    window.scrollTo(0, 0);
  };
  return (
    <div className="movie-container">
      {props.movies.map((movie) => (
        <Link
          key={movie.id}
          to={{ pathname: `/MovieProfile/${movie.id}`, movie }}
        >
          <div onClick={() => scrollHandler()} className="movie-card-wrapper">
            <MovieCard data={movie} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCardHolder;
