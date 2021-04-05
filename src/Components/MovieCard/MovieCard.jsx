import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const imgURL =
    props.data["poster_path"] === null
      ? ""
      : `http://image.tmdb.org/t/p/w500${props.data["poster_path"]}`;
  return (
    props.data !== "404" && (
      <div className="movie-card">
        <img
          className="movie-card-img"
          src={imgURL}
          alt={props.data.original_title || props.data.original_name}
        ></img>
      </div>
    )
  );
};

export default MovieCard;
