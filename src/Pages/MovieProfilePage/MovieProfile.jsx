import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieProfile.css";
import Similar from "../../Components/SimilarMovies/Similar";
import MovieREST from "../../MovieApi/MovieREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Footer from "../../Components/Navbar/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MovieProfile = () => {
  const passedMovie = useHistory().location.movie;
  const currentMovieId = useHistory().location.pathname.substring(14);
  const [movie, setMovie] = useState("");
  let castIndex = 0;

  // workaround for persisting state without browserrouter
  useEffect(() => {
    let isSub = true;
    if (passedMovie !== undefined) {
      setMovie(passedMovie);
      sessionStorage.setItem(
        `movieprofile${currentMovieId}`,
        JSON.stringify(passedMovie)
      );
    }
    const newmov = JSON.parse(
      sessionStorage.getItem(`movieprofile${currentMovieId}`)
    );
    if (newmov.rec === undefined) {
      getMovieDetails(newmov.id).then((data) => {
        const newobj = Object.assign({}, data, newmov);
        const run = async () => {
          await sessionStorage.setItem(
            `movieprofile${currentMovieId}`,
            JSON.stringify(newobj)
          );

          const cr = JSON.parse(
            sessionStorage.getItem(`movieprofile${currentMovieId}`)
          );

          if (isSub) setMovie(cr);
        };
        run();
      });
    }

    setMovie(
      JSON.parse(sessionStorage.getItem(`movieprofile${currentMovieId}`))
    );

    return () => (isSub = false);
  }, [currentMovieId, passedMovie]);

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
      {/* <Navbar /> */}
      <div className="profile-cont">
        <div>
          <MovieCard data={movie} />
        </div>
        <div className="text-cont">
          <div className="title-cont">
            <h2 className="movie-title">{movie.original_title}</h2>
            <h2 className="movie-release">
              {movie !== "" && movie.release_date.substring(0, 4)}
            </h2>
          </div>
          <div className="desc-cont">
            <p className="movie-desc">{movie.overview}</p>
          </div>
        </div>
        <div className="cast">
          <div style={{ fontWeight: "bold" }}>Cast: </div>
          {movie !== "" &&
            movie.credits !== undefined &&
            movie.credits.cast.map((record) => {
              return (
                <div key={castIndex++} className="cast-record">
                  {record.name} : {record.character}
                </div>
              );
            })}
        </div>
        <p className="rating">
          <i
            style={{ paddingRight: "1vw", fontSize: "9vmin", color: "#986B05" }}
            className="fas fa-star fa-1x"
          ></i>
          {movie.vote_average}
        </p>
      </div>
      <h2 style={{ textAlign: "center" }}>Reccomended Movies</h2>
      {movie.rec !== undefined && <MovieCardHolder movies={movie.rec} />}
      <h2 style={{ textAlign: "center" }}>
        Similar movies based on keywords and genres
      </h2>
      {movie.similar !== undefined && (
        <MovieCardHolder movies={movie.similar} />
      )}
      <Footer />
      {/* <Similar key={movie.id} movieid={movie.id} /> */}
    </>
  );
};

export default MovieProfile;
