import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import Footer from "../../Components/Navbar/Footer";
import axios from "axios";
import "./Popular.css";

const Popular = () => {
  const history = useHistory();
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem(`${history.location.path}`)) || []
  );
  const [pages, setPages] = useState(
    JSON.parse(sessionStorage.getItem(`${history.location.path}pages`)) || 1
  );

  const [ADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );

  const getPopularMovies = useCallback(
    async (page, cancelToken) => {
      //console.log("hi");
      let arr = [];
      for (let i = 1; i <= page; i++) {
        const pop = await ADAPTER.getPopular(i, cancelToken);
        //console.log(pop.data);
        const filtered = pop.data.results.filter(
          (x) => x.original_language === "en"
        );
        arr = [...arr, ...filtered];
      }

      setMovies(arr);

      sessionStorage.setItem(`${history.location.path}`, JSON.stringify(arr));
      sessionStorage.setItem(`${history.location.path}pages`, pages);
    },
    [ADAPTER, history.location.path, pages]
  );

  useEffect(() => {
    setMovies([]);
  }, [ADAPTER]);

  useEffect(() => {
    const scrollMethod = async () => {
      const setPos = await parseInt(
        sessionStorage.getItem(`scroll${history.location.pathname}`)
      );
      setTimeout(() => {
        window.scrollTo(0, setPos);
      }, 100);
    };
    scrollMethod();
  }, [history.location.pathname]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    getPopularMovies(pages, source.token).catch((e) => {});
    console.log("lol");
    return () => {
      source.cancel("canceled async call");
    };
  }, [pages, getPopularMovies]);

  const loadHandler = () => {
    setPages(pages + 1);
    const path = history.location.pathname;
    const pos = document.body.scrollTop || document.documentElement.scrollTop;
    sessionStorage.setItem(`scroll${path}`, pos);
  };
  return (
    <>
      {movies !== null && movies.length !== 0 && (
        <MovieCardHolder movies={movies} />
      )}
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
