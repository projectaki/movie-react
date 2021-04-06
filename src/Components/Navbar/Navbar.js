import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";

const Navbar = (props) => {
  useEffect(() => {
    console.log(props);
  });

  const toggleHandler = (e) => {
    e.stopPropagation();
    const elem = document.getElementById("mobile-menu");
    if (elem.classList.contains("toggle")) {
      elem.classList.remove("toggle");
    } else {
      elem.classList.add("toggle");
    }
  };

  return (
    <div id="n" className="navbar">
      <Link
        to={{ pathname: "/", reset: true }}
        style={{ textDecoration: "none", position: "absolute", left: "2vw" }}
        replace
      >
        <p
          style={{
            fontSize: "4vmin",
            fontWeight: "bold",
            color: "#E3C11B",
          }}
        >
          Home
        </p>
      </Link>
      <div style={{ fontSize: "4vmin", fontWeight: "900", color: "#1B78E3" }}>
        {props.isMovie && "MOVIES"}
        {!props.isMovie && "TV SHOWS"}
        <i
          style={{ paddingLeft: "1vw", fontSize: "4vmin" }}
          className="fas fa-tv fa-2x"
        ></i>
      </div>

      <div className="link-cont">
        <Link
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
          to="/Popular"
        >
          <div className="nav-list-element">Popular</div>
        </Link>
        <Link
          to="/NowPlaying"
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
        >
          <div className="nav-list-element">
            {props.isMovie && "In Cinemas"}
            {!props.isMovie && "Now Airing"}
          </div>
        </Link>

        <Link
          to="/Upcoming"
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
        >
          <div className="nav-list-element">Upcoming</div>
        </Link>
      </div>
      <i
        onClick={(e) => toggleHandler(e)}
        className="fas fa-bars fa-1x mobile-icon"
      ></i>
      <div
        id="mobile-menu"
        className="div-cont-mobile "
        style={{ zIndex: "1" }}
      >
        <Link
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
          to="/Popular"
        >
          <div className="nav-list-element">Popular</div>
        </Link>
        <Link
          to="/NowPlaying"
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
        >
          <div className="nav-list-element">
            {props.isMovie && "In Cinemas"}
            {!props.isMovie && "Now Airing"}
          </div>
        </Link>

        <Link
          to="/Upcoming"
          activeStyle={{ backgroundColor: "#CAC40E", color: "black" }}
          className="nav-link"
        >
          <div className="nav-list-element">Upcoming</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
