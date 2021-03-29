import React from "react";

const MovieCard = (props) => {
  return (
    <div style={{ display: "flex", width: "500px", border: "5px solid black" }}>
      <img
        src={`http://image.tmdb.org/t/p/w200${props.data["poster_path"]}`}
      ></img>
      <div style={{ paddingLeft: "50px" }}>
        <p>{props.data.title}</p>
        <p>{props.data.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
