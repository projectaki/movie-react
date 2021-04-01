import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";

const MovieProfile = (props) => {
  const [movie, setMovie] = useState("");
  const passedMovie = useHistory().location.movie;

  useEffect(() => {
    passedMovie !== undefined &&
      sessionStorage.setItem("movieprofile", JSON.stringify(passedMovie));
    setMovie(JSON.parse(sessionStorage.getItem("movieprofile")));
  }, [passedMovie]);

  return (
    <div className="profile-cont">
      <MovieCard data={movie} />
      <div></div>
    </div>
  );
};

export default MovieProfile;
