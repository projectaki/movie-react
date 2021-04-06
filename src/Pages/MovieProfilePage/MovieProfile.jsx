import React, { useEffect, useState, useCallback } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieProfile.css";
// import Similar from "../../Components/SimilarMovies/Similar";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Footer from "../../Components/Navbar/Footer";

const MovieProfile = () => {
  const passedMovie = useHistory().location.movie;
  const currentMovieId = useHistory().location.pathname.substring(14);
  const [movie, setMovie] = useState("");
  const [ADAPTER] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? MovieREST : TvREST
  );
  let castIndex = 0;

  const getMovieDetails = useCallback(
    async (id) => {
      let details = {
        credits: null,
        rec: null,

        similar: null,
      };

      const credits = await ADAPTER.getCredits(id);
      const rec = await ADAPTER.getReccomendation(id);

      const similar = await ADAPTER.getSimilar(id);
      const res = await Promise.all([credits, rec, similar]);

      details.credits = res[0].data;
      details.rec = res[1].data.results.filter((x) => x.poster_path !== null);

      details.similar = res[2].data.results.filter(
        (x) => x.poster_path !== null
      );

      return details;
    },
    [ADAPTER]
  );
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
  }, [currentMovieId, passedMovie, getMovieDetails]);

  useEffect(() => {
    //window.scrollTo(0, 0);
  }, [movie]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="profile-cont">
        <div>
          <MovieCard data={movie} />
        </div>
        <div className="text-cont">
          <div className="title-cont">
            <h2 className="movie-title">
              {movie.original_title || movie.original_name}
            </h2>
            <h2 className="movie-release">
              {movie !== "" &&
                ((movie.release_date !== undefined &&
                  movie.release_date.substring(0, 4)) ||
                  (movie.first_air_date !== undefined &&
                    movie.first_air_date.substring(0, 4)))}
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
