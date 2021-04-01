import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieProfile.css";

const MovieProfile = (props) => {
  const [movie, setMovie] = useState("");
  const passedMovie = useHistory().location.movie;

  useEffect(() => {
    passedMovie !== undefined &&
      sessionStorage.setItem("movieprofile", JSON.stringify(passedMovie));
    setMovie(JSON.parse(sessionStorage.getItem("movieprofile")));
  }, [passedMovie]);

  return (
    <>
      <div className="profile-cont">
        <MovieCard data={movie} />
        <div>
          <h1 className="movie-title">{movie.original_title}</h1>
          <p className="movie-desc">{movie.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieProfile;
