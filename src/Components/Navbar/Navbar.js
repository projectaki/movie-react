import React from "react";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";

const Navbar = (props) => {
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
        to={{ pathname: "/Home", reset: true }}
        style={{ textDecoration: "none" }}
        replace
      >
        <div
          style={{
            fontSize: "4vh",
            fontWeight: "900",
            color: "black",
            fontFamily: "CeraBold",
          }}
        >
          {props.isMovie && "Movies"}
          {!props.isMovie && "Tv shows"}
          <i
            style={{
              paddingLeft: "1vw",
              fontSize: "3vh",
              color: "black",
            }}
            className="fas fa-tv fa-2x"
          ></i>
        </div>
      </Link>

      <div className="link-cont">
        <Link
          to={{ pathname: "/", reset: true }}
          style={{ textDecoration: "none", marginRight: "2vw" }}
          replace
        >
          <i
            style={{ color: "black", fontSize: "1.8vw" }}
            className="fas fa-home"
          ></i>
        </Link>

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
        style={{ color: "rgb(150, 150, 150)" }}
      ></i>
      <div
        id="mobile-menu"
        className="div-cont-mobile "
        style={{ zIndex: "1" }}
      >
        <Link
          to={{ pathname: "/", reset: true }}
          style={{ color: "yellow" }}
          className="nav-link"
          replace
        >
          <div className="nav-list-element">Home</div>
        </Link>
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
