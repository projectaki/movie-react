import React, { useEffect, useState } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieREST from "../../MovieApi/MovieREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import "./Home.css";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const searchBar = document.getElementById("search");
    if (movies.length > 0) {
      searchBar.classList.add("up-pos");
    } else searchBar.classList.remove("up-pos");
    const historymovies =
      history.location.state === undefined ? [] : history.location.state.movies;
    setMovies(historymovies);
  });

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

    history.push({
      pathname: "/",
      state: {
        movies: arr,
      },
    });
  };

  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        getResults={getSearchResults}
      />
      {movies.length !== 0 && <MovieCardHolder movies={movies} />}
    </div>
  );
};

export default Home;
