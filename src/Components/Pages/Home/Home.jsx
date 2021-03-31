import React, { useEffect, useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import MovieREST from "../../../MovieApi/MovieREST";
import "./Home.css";
import MovieCard from "../../MovieCard/MovieCard";
import Footer from "../../Navbar/Footer";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log(movies);
  });

  const getSearchResults = async () => {
    setMovies([]);
    const res = await MovieREST.searchWithQuery(search);

    for (let movie of res.data.results) {
      movie["poster_path"] !== null &&
        movie["original_language"] === "en" &&
        movie["popularity"] > 15 &&
        movie["vote_count"] > 30 &&
        movie["backdrop_path"] !== null &&
        setMovies((movies) => [...movies, movie]);
    }
  };
  return (
    <div>
      <SearchBar
        search={search}
        setSearch={setSearch}
        getResults={getSearchResults}
        setMovies={setMovies}
      />

      {movies.length !== 0 && (
        <div className="movie-container">
          {movies.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
