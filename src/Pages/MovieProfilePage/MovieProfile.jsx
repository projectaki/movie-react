import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieProfile.css";
import Similar from "../../Components/SimilarMovies/Similar";
import MovieREST from "../../MovieApi/MovieREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";

const MovieProfile = () => {
  const [movie, setMovie] = useState("");
  const passedMovie = useHistory().location.movie;
  const currentMovieId = useHistory().location.pathname.substring(14);

  // workaround for persisting state without browserrouter
  useEffect(() => {
    // only the first time the page loads
    if (passedMovie !== undefined) {
      //set values quickly to load info quick
      sessionStorage.setItem(
        `movieprofile${currentMovieId}`,
        JSON.stringify(passedMovie)
      );
      getMovieDetails(passedMovie.id).then((data) => {
        const newobj = Object.assign({}, data, passedMovie);
        const run = async () => {
          await sessionStorage.setItem(
            `movieprofile${currentMovieId}`,
            JSON.stringify(newobj)
          );
          setMovie(
            JSON.parse(sessionStorage.getItem(`movieprofile${currentMovieId}`))
          );
        };
        run();
      });
    }
    //
    setMovie(
      JSON.parse(sessionStorage.getItem(`movieprofile${currentMovieId}`))
    );
  }, [currentMovieId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movie]);

  const getMovieDetails = async (id) => {
    let details = {
      release: null,
      credits: null,
      rec: null,
      review: null,
      similar: null,
    };

    const release = await MovieREST.getReleaseDate(id);
    const credits = await MovieREST.getCredits(id);
    const rec = await MovieREST.getReccomendation(id);
    const review = await MovieREST.getReviews(id);
    const similar = await MovieREST.getSimilar(id);
    const res = await Promise.all([release, credits, rec, review, similar]);

    details.release = res[0].data;
    details.credits = res[1].data;
    details.rec = res[2].data.results.filter((x) => x.poster_path !== null);
    details.review = res[3].data;
    details.similar = res[4].data.results.filter((x) => x.poster_path !== null);

    return details;
  };

  return (
    <>
      <div className="profile-cont">
        <div>
          <MovieCard data={movie} />
          <p className="movie-desc">{movie.release_date}</p>
        </div>

        <div>
          <h1 className="movie-title">{movie.original_title}</h1>

          <p className="movie-desc">{movie.overview}</p>
        </div>
      </div>
      <h2 style={{ textAlign: "center" }}>Reccomended Movies</h2>
      {movie.rec !== undefined && <MovieCardHolder movies={movie.rec} />}
      <h2 style={{ textAlign: "center" }}>
        Similar movies based on keywords and genres
      </h2>
      {movie.similar !== undefined && (
        <MovieCardHolder movies={movie.similar} />
      )}

      <Similar key={movie.id} movieid={movie.id} />
    </>
  );
};

export default MovieProfile;
