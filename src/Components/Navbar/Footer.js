import React from "react";
import "./Navbar.css";

const Footer = () => {
  return (
    <div className="footer">
      <p
        style={{
          fontSize: "2vw",
          color: "#DCEC11",
        }}
      >
        {`API provided by themoviedb.org & justwatch.com`}
      </p>
    </div>
  );
};

export default Footer;
