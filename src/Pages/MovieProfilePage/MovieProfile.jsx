import React from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";

const MovieProfile = (props) => {
  const {
    poster_path,
    overview,
    original_title,
    vote_average,
    release_date,
  } = props.location.data;
  return (
    <div className="profile-cont">
      <MovieCard data={props.location.data} />
    </div>
  );
};

export default MovieProfile;
