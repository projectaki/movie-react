import React from "react";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
        <Link
          to={{ pathname: "/", reset: true }}
          style={{ textDecoration: "none" }}
          replace
        >
          <p
            style={{
              fontSize: "4vmin",
              fontWeight: "bold",
              color: "black",
            }}
          >
            My Cinema
          </p>
        </Link>

        <i
          style={{ paddingLeft: "2 vw", fontSize: "4vmin" }}
          className="fas fa-film fa-2x"
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
          <div className="nav-list-element">In-Cinemas</div>
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
