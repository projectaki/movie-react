import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Footer from "../../Components/Navbar/Footer";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const [ADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );

  useEffect(() => {
    setMovies([]);
  }, [ADAPTER]);

  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    window.scrollTo(0, setPos);
  }, [history.location.pathname]);

  const getUpcoming = useCallback(async () => {
    const arr = await ADAPTER.getUpcoming();
    const filtered = arr.data.results.filter(
      (x) => x.original_language === "en"
    );
    setMovies(filtered);
  }, [ADAPTER]);

  useEffect(() => getUpcoming(), [getUpcoming]);

  return (
    <>
      {movies.length !== 0 && <MovieCardHolder movies={movies} />}
      <Footer />
    </>
  );
};

export default Upcoming;
