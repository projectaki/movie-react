import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";
import Footer from "../../Components/Navbar/Footer";
import "./Popular.css";

const Popular = () => {
  const history = useHistory();
  const [movies, setMovies] =
    useState(JSON.parse(sessionStorage.getItem(`${history.location.path}`))) ||
    [];
  const [pages, setPages] =
    useState(
      JSON.parse(sessionStorage.getItem(`${history.location.path}pages`))
    ) || 1;

  useEffect(() => {
    getPopularMovies(1);
  }, []);
  useEffect(() => {
    getPopularMovies(pages);
  }, [pages]);

  useEffect(() => {
    const setPos = parseInt(
      sessionStorage.getItem(`scroll${history.location.pathname}`)
    );
    document.body.scrollTop = setPos;
    document.documentElement.scrollTop = setPos;
  }, [document.body.scrollTop, document.documentElement.scrollTop]);

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
    sessionStorage.setItem(`${history.location.path}`, JSON.stringify(movies));
    sessionStorage.setItem(`${history.location.path}pages`, pages);
  };

  const loadHandler = () => {
    setPages(pages + 1);
    const path = history.location.pathname;
    const pos = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(`scroll${path}`, pos);
  };
  return (
    <>
      {movies !== null &&
        movies.map((page) => {
          return (
            movies.length !== 0 && (
              <MovieCardHolder
                key={page.data.page}
                movies={page.data.results}
              />
            )
          );
        })}
      <div className="load-cont">
        <div className="load-more-btn" onClick={() => loadHandler()}>
          Load more...
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Popular;
