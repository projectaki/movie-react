import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";

const NowPlaying = () => {
  const history = useHistory();
  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    document.body.scrollTop = setPos;
    document.documentElement.scrollTop = setPos;
  }, [document.body.scrollTop, document.documentElement.scrollTop]);
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
