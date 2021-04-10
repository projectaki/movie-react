import React, { useEffect, useState } from "react";
import Footer from "../../Components/Navbar/Footer";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import "./Home.css";

const Home = ({ setNav }) => {
  const [isMovie] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? true : false
  );
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(
    JSON.parse(sessionStorage.getItem("movies")) || ""
  );
  const [ADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );

  useEffect(() => {
    setNav();
  }, [setNav]);

  useEffect(() => {
    setMovies("");
  }, [ADAPTER]);

  useEffect(() => {
    sessionStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const getSearchResults = async () => {
    const res = await ADAPTER.searchWithQuery(search);
    const arr = [];
    for (let movie of res.data.results) {
      movie["poster_path"] !== null &&
        movie["original_language"] === "en" &&
        movie["backdrop_path"] !== null &&
        arr.push(movie);
    }
    setMovies(arr);
  };

  return (
    <>
      {typeof movies === "string" && (
        <div className="middle-text-cont">
          An application to help you find similar movies to your favourite
          content
        </div>
      )}
      {typeof movies === "object" && movies.length === 0 && (
        <div className="middle-text-cont">
          No entries were found for your search...
        </div>
      )}

      <SearchBar
        search={search}
        setSearch={setSearch}
        getResults={getSearchResults}
        length={movies.length}
        isMovie={isMovie}
      />
      {movies.length !== 0 && (
        <>
          <MovieCardHolder movies={movies} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
