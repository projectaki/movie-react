import React, { useEffect, useState } from "react";

import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieREST from "../../MovieApi/MovieREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import "./Home.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem("movies")) || ""
  );

  const location = useLocation();

  useEffect(() => {
    const searchBar = document.getElementById("search");

    if (location.reset === true) {
      setMovies([]);
      searchBar.classList.remove("anim", "up-pos");
      searchBar.classList.add("down-pos");
    }
  }, [location]);

  useEffect(() => {
    sessionStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    const searchBar = document.getElementById("search");
    if (movies.length > 0) {
      searchBar.classList.remove("down-pos");
      searchBar.classList.add("up-pos");
    } else {
      searchBar.classList.remove("anim", "up-pos");
      searchBar.classList.add("down-pos");
    }
  }, [movies]);

  const getSearchResults = async () => {
    const res = await MovieREST.searchWithQuery(search);
    const arr = [];
    for (let movie of res.data.results) {
      movie["poster_path"] !== null &&
        movie["original_language"] === "en" &&
        movie["popularity"] > 15 &&
        movie["vote_count"] > 30 &&
        movie["backdrop_path"] !== null &&
        arr.push(movie);
    }
    setMovies(arr);
  };

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        getResults={getSearchResults}
        length={movies.length}
      />
      {movies.length !== 0 && <MovieCardHolder movies={movies} />}
    </>
  );
};

export default Home;
