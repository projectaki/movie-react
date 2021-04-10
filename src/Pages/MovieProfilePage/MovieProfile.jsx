import React, { useEffect, useState, useCallback } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieProfile.css";
// import Similar from "../../Components/SimilarMovies/Similar";
import MovieREST from "../../MovieApi/MovieREST";
import TvREST from "../../MovieApi/TvREST";
import MovieCardHolder from "../../Components/MovieCardHolder/MovieCardHolder";
import Footer from "../../Components/Navbar/Footer";
import Providers from "../../Components/Providers/Providers";
import Seasons from "../../Components/Seasons/Seasons";

const MovieProfile = () => {
  const [isMovieState] = useState(
    sessionStorage.getItem("SELECTOR") === "movie" ? true : false
  );
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
        providers: null,
        info: null,
      };

      const credits = await ADAPTER.getCredits(id);
      const rec = await ADAPTER.getReccomendation(id);
      const similar = await ADAPTER.getSimilar(id);
      const providers = await ADAPTER.getProviders(id);
      const info = await ADAPTER.findByMovieId(id);

      const res = await Promise.all([credits, rec, similar, providers, info]);

      details.credits = res[0].data;
      details.rec = res[1].data.results.filter((x) => x.poster_path !== null);
      details.similar = res[2].data.results.filter(
        (x) => x.poster_path !== null
      );
      details.providers = res[3].data;
      details.info = res[4].data;

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

  return (
    <>
      <div>
        {movie.backdrop_path !== undefined && movie.backdrop_path !== null && (
          <img
            className="backdrop"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.original_title || movie.original_name}
          ></img>
        )}
      </div>

      <div className="profile-cont">
        <div className="wrapper">
          <div>
            <MovieCard data={movie} />
            <p className="rating">
              <i
                style={{
                  paddingRight: "1vw",
                  fontSize: "7vmin",
                  color: "#FFD700",
                  textShadow: "0 0 5px black",
                }}
                className="fas fa-star fa-1x"
              ></i>
              <span style={{ color: "#FFD700", textShadow: "0 0 10px black" }}>
                {movie.vote_average}
              </span>
            </p>
            <div className="cast">
              {movie !== "" &&
                movie.credits !== undefined &&
                movie.credits.cast.map((record) => {
                  return (
                    <div key={castIndex++} className="cast-record">
                      <span className="cell">{record.name}</span>
                      <span className="cell2">{record.character}</span>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="text-cont">
            <div className="title-cont">
              <h2 className="movie-title">
                {movie.original_title || movie.original_name} (
                <span
                  style={{
                    fontStyle: "italic",
                    color: "rgb(120,120,120)",
                    marginLeft: "1vw",
                    marginRight: "1vw",
                  }}
                >
                  {movie !== "" &&
                    ((movie.release_date !== undefined &&
                      movie.release_date.substring(0, 4)) ||
                      (movie.first_air_date !== undefined &&
                        movie.first_air_date.substring(0, 4)))}
                </span>
                )
              </h2>
            </div>
            <div className="desc-cont">
              <p className="movie-desc">{movie.overview}</p>
            </div>
            <div className="prov-cont">
              <Providers providers={movie.providers} />
            </div>
            <div className="seas-cont">
              {!isMovieState && movie.info !== undefined && (
                <Seasons seasons={movie.info.seasons} movieid={movie.id} />
              )}
            </div>
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "6vmin",
            fontFamily: "CeraBold",
            width: "100%",
            padding: "1vh 0",
          }}
        >
          {`Recommended ${isMovieState ? "movies" : "tv shows"}`}
        </h2>
        {movie.rec !== undefined && <MovieCardHolder movies={movie.rec} />}
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "6vmin",
            width: "100%",
            padding: "1vh 0",
          }}
        >
          {`Similar ${
            isMovieState ? "movies" : "tv shows"
          } based on keywords and genres`}
        </h2>
        {movie.similar !== undefined && (
          <MovieCardHolder movies={movie.similar} />
        )}
        <Footer />
      </div>
    </>
  );
};

export default MovieProfile;
