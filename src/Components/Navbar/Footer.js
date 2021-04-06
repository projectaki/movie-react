import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="footer">
      <p
        style={{
          fontSize: "2vw",
          fontFamily: "sans-serif",
          fontWeight: "900",
          color: "#DCEC11",
        }}
      >
        API provided by https://www.themoviedb.org/
      </p>
    </div>
  );
};

export default Footer;
