import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieREST from "../../MovieApi/MovieREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem("movies")) || ""
  );

  useEffect(() => {
    // special action if we refresh
    window.onbeforeunload = function () {
      return setMovies([]);
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  useEffect(() => {
    const searchBar = document.getElementById("search");
    sessionStorage.setItem("movies", JSON.stringify(movies));
    movies.length > 0 && searchBar.classList.add("up-pos");
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
