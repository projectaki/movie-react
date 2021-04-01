import React, { useEffect } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";

const MovieProfile = (props) => {
  const history = useHistory();
  const data =
    history.location.state === undefined ? "404" : history.location.state.data;

  // const {
  //   poster_path,
  //   overview,
  //   original_title,
  //   vote_average,
  //   release_date,
  // } = location.data;
  return (
    <div className="profile-cont">
      <MovieCard data={data} />
      <div></div>
    </div>
  );
};

export default MovieProfile;
