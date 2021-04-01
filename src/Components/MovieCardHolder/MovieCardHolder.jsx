import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import Footer from "../Navbar/Footer";
import "./MovieCardHolder.css";
import { useHistory } from "react-router-dom";

const MovieCardHolder = (props) => {
  const history = useHistory();

  return (
    <div className="movie-container">
      {props.movies.map((movie) => (
        <div
          className="movie-img"
          onClick={() =>
            history.push({
              pathname: "/MovieProfile",
              state: {
                data: movie,
              },
            })
          }
        >
          <MovieCard key={movie.id} data={movie} />
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default MovieCardHolder;
