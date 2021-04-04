import React, { useEffect, useState } from "react";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";
import "./Popular.css";

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const PAGES_TO_LOAD = 2;
  useEffect(() => {
    getPopularMovies(PAGES_TO_LOAD);
  }, []);

  const getPopularMovies = async (page) => {
    const createArray = (page) => {
      const temp = [];
      for (let i = 1; i <= page; i++) {
        temp.push(i);
      }
      return temp;
    };

    const arr = await Promise.all(
      createArray(page).map(async (x) => {
        return await MovieREST.getPopular(x);
      })
    );
    setMovies(arr);
  };
  return (
    <>
      {movies.map((page) => {
        return (
          movies.length !== 0 && (
            <MovieCardHolder key={page.data.page} movies={page.data.results} />
          )
        );
      })}
    </>
  );
};

export default Popular;
