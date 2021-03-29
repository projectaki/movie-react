import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Flask from "../../FlaskApi/FlaskREST";
import MovieREST from "../../MovieApi/MovieREST";

const MovieCardHolder = () => {
  const [input, setInput] = useState(0);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [searching, setSearching] = useState(false);

  const getSimilarMovies = async (id) => {
    if (!searching) {
      setSearching(true);
      setSimilarMovies([]);
      document.getElementById("buton").innerHTML = "Loading...";
      const res = await Flask.findByMovieId(id);
      document.getElementById("buton").innerHTML = "fetch similar movies";
      for (let item of res.data) {
        let result = await MovieREST.findByMovieId(item.id);
        setSimilarMovies((similarMovies) => [...similarMovies, result.data]);
      }
      setSearching(false);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button id="buton" onClick={() => getSimilarMovies(input)}>
        fetch similar movies
      </button>
      {similarMovies.map((x) => (
        <MovieCard key={x.id} data={x} />
      ))}
    </div>
  );
};

export default MovieCardHolder;
