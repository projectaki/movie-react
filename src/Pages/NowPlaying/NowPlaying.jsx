import React, { useState, useEffect } from "react";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  const getNowPlaying = async () => {
    const arr = await MovieREST.getNowPlaying();
    const filtered = arr.data.results.filter(
      (x) => x.original_language === "en"
    );
    setMovies(filtered);
  };
  useEffect(() => getNowPlaying(), []);

  return movies.length !== 0 && <MovieCardHolder movies={movies} />;
};

export default NowPlaying;
