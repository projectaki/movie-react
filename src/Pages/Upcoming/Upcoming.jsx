import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Navbar from "../../Components/Navbar/Navbar";
import MovieREST from "../../MovieApi/MovieREST";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    document.body.scrollTop = setPos;
    document.documentElement.scrollTop = setPos;
  }, [history.location.pathname]);
  const getUpcoming = async () => {
    const arr = await MovieREST.getUpcoming();
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
