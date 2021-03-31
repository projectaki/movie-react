import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
        <p style={{ fontSize: "4vmin", fontWeight: "bold" }}>My Cinema</p>
        <i
          style={{ paddingLeft: "2 vw", fontSize: "4vmin" }}
          class="fas fa-film fa-2x"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
