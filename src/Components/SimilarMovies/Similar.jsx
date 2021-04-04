import React, { useState, useEffect } from "react";
import MovieCardHolder from "../MovieCardHolder/MovieCardHolder";
import Flask from "../../FlaskApi/FlaskREST";
import MovieREST from "../../MovieApi/MovieREST";
import Footer from "../Navbar/Footer";

const Similar = (props) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    props.movieid !== undefined && getSimilarMovies(props.movieid);

    return () => setSimilarMovies([]);
  }, [props.movieid]);

  const getSimilarMovies = async (id) => {
    try {
      const res = await Flask.findByMovieId(id);
      const arr =
        typeof res.data !== "object"
          ? []
          : await Promise.all(
              res.data.map(async (x) => {
                let response = await MovieREST.findByMovieId(x.id);
                return response.data;
              })
            );

      setSimilarMovies(arr);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
      setError("Error while connecting to Server");
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        Similar movies based on movie description text similarity
      </h2>
      {similarMovies.length > 0 && <MovieCardHolder movies={similarMovies} />}
      {isLoading && (
        <p key={props.movieid} style={{ color: "white", textAlign: "center" }}>
          Loading...
        </p>
      )}
      {!isLoading && similarMovies.length === 0 && error === "" && (
        <p key={props.movieid} style={{ color: "red", textAlign: "center" }}>
          Similar movies not available for this title!
        </p>
      )}
      {error !== "" && (
        <p key={props.movieid} style={{ color: "red", textAlign: "center" }}>
          {`${error}...`}
        </p>
      )}
      <Footer />
    </>
  );
};
export default Similar;
