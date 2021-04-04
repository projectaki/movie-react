import React, { useState, useEffect } from "react";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const getUpcoming = async () => {
    const arr = await MovieREST.getUpcoming();
    const filtered = arr.data.results.filter(
      (x) => x.original_language === "en"
    );
    setMovies(filtered);
  };
  useEffect(() => getUpcoming(), []);

  return movies.length !== 0 && <MovieCardHolder movies={movies} />;
};

export default Upcoming;
