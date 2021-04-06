import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
const Main = () => {
  useEffect(() => {
    const elem = document.getElementById("n");
    elem.classList.add("hide-nav");

    return () => elem.classList.remove("hide-nav");
  }, []);

  const setTv = () => {
    sessionStorage.setItem("SELECTOR", "tv");
  };

  const setMovie = () => {
    sessionStorage.setItem("SELECTOR", "movie");
  };

  return (
    <div className="main-page">
      <div className="select-cont">
        <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
          <div onClick={() => setTv()} className="select">
            Tv-series
          </div>
        </Link>
        <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
          <div onClick={() => setMovie()} className="select">
            Movies
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Main;
