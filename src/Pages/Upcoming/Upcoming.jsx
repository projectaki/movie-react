import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Navbar from "../../Components/Navbar/Navbar";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();

  const [ADAPTER, setADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );

  useEffect(() => {
    sessionStorage.removeItem(`scroll${history.location.pathname}`);
    setMovies([]);
  }, [ADAPTER]);

  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    document.body.scrollTop = setPos;
    document.documentElement.scrollTop = setPos;
  }, [history.location.pathname]);
  const getUpcoming = async () => {
    const arr = await ADAPTER.getUpcoming();
    const filtered = arr.data.results.filter(
      (x) => x.original_language === "en"
    );
    setMovies(filtered);
  };
  useEffect(() => getUpcoming(), []);

  return (
    <>
      {/* <Navbar /> */}
      {movies.length !== 0 && <MovieCardHolder movies={movies} />}
    </>
  );
};

export default Upcoming;
