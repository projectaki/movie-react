import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import Footer from "../../Components/Navbar/Footer";

const NowPlaying = () => {
  const [ADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );
  const history = useHistory();

  useEffect(() => {
    setMovies([]);
  }, [ADAPTER]);

  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    window.scrollTo(0, setPos);
  }, [history.location.pathname]);
  const [movies, setMovies] = useState([]);

  const getNowPlaying = useCallback(async () => {
    const arr = await ADAPTER.getNowPlaying();
    const filtered = arr.data.results.filter(
      (x) => x.original_language === "en"
    );
    setMovies(filtered);
  }, [ADAPTER]);
  useEffect(() => getNowPlaying(), [getNowPlaying]);

  return (
    <>
      {movies.length !== 0 && <MovieCardHolder movies={movies} />}
      <Footer />
    </>
  );
};

export default NowPlaying;
