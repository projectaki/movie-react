import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import MovieProfile from "../../Pages/MovieProfilePage/MovieProfile";

const MovieCard = (props) => {
  const linkTo = {
    pathname: "/MovieProfile",
    data: props.data,
  };

  const imgURL =
    props.data["poster_path"] === null
      ? ""
      : `http://image.tmdb.org/t/p/w200${props.data["poster_path"]}`;
  return (
    <div className="movie-card">
      <Link to={linkTo}>
        <img className="movie-img" src={imgURL}></img>
      </Link>
    </div>
  );
};

export default MovieCard;
