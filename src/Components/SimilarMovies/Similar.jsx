import React, { useState, useEffect } from "react";
import MovieCardHolder from "../MovieCardHolder/MovieCardHolder";
import Flask from "../../FlaskApi/FlaskREST";
import MovieREST from "../../MovieApi/MovieREST";

const Similar = (props) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    props.movieid !== undefined && getSimilarMovies(props.movieid);
  }, [props.movieid]);

  const getSimilarMovies = async (id) => {
    const res = await Flask.findByMovieId(id);

    const arr = await Promise.all(
      res.data.map(async (x) => {
        let response = await MovieREST.findByMovieId(x.id);
        return response.data;
      })
    );
    setSimilarMovies(arr);
  };

  return (
    <>
      <h2>Similar movies</h2>
      <MovieCardHolder movies={similarMovies} />
    </>
  );
};
export default Similar;
