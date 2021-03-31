import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  const imgURL =
    props.data["poster_path"] === null
      ? ""
      : `http://image.tmdb.org/t/p/w200${props.data["poster_path"]}`;
  return (
    <div className="movie-card">
      <img className="movie-img" src={imgURL}></img>
    </div>
  );
};

export default MovieCard;
