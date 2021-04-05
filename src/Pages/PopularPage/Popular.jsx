import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import Footer from "../../Components/Navbar/Footer";
import "./Popular.css";
import Navbar from "../../Components/Navbar/Navbar";

const Popular = () => {
  const history = useHistory();
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem(`${history.location.path}`)) || []
  );
  const [pages, setPages] = useState(
    JSON.parse(sessionStorage.getItem(`${history.location.path}pages`)) || 1
  );

  const [ADAPTER, setADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );

  useEffect(() => {}, []);

  useEffect(() => {
    sessionStorage.removeItem(`scroll${history.location.pathname}`);
    setMovies([]);
  }, [ADAPTER]);

  useEffect(() => {
    const scrollMethod = async () => {
      const setPos = await parseInt(
        sessionStorage.getItem(`scroll${history.location.pathname}`)
      );
      document.body.scrollTop = setPos;
      document.documentElement.scrollTop = setPos;
    };
    scrollMethod();
  }, [document.body.scrollTop, document.documentElement.scrollTop]);
  useEffect(() => {
    getPopularMovies(pages);
  }, [pages]);

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
        return await ADAPTER.getPopular(x);
      })
    );
    console.log(arr);
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
      {/* <Navbar /> */}
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
