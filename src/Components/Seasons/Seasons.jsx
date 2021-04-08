import React, { useEffect, useState } from "react";
import "./Seasons.css";
import TvREST from "../../MovieApi/TvREST";

const Seasons = ({ seasons, movieid }) => {
  const [season, setSeason] = useState(1);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const getSeasonInfo = async (id, seasonNumber) => {
      const info = await TvREST.getSeasonInfo(id, seasonNumber);
      setEpisodes(info.data.episodes);
    };
    getSeasonInfo(movieid, season);
  }, [movieid, season]);

  return (
    <>
      <select
        style={{
          width: "50vmin",
          borderRadius: "5px",
          backgroundColor: "#484848",
          color: "white",
          fontSize: "16px",
        }}
        value={season}
        onChange={(e) => {
          setSeason(e.target.value);
        }}
      >
        {seasons.map((x, idx) => {
          return (
            <option value={x.season_number} key={idx}>
              {x.name}
            </option>
          );
        })}
      </select>
      <div className="episode-container">
        {episodes.map((episode, idx) => {
          return (
            <div key={idx}>
              <div>
                S{episode.season_number} E{episode.episode_number}:{" "}
                <span
                  className="episode"
                  id={idx}
                  onClick={(e) => {
                    const elem = document.getElementById(`d${e.target.id}`);
                    if (elem.style.display === "none") {
                      elem.style.display = "block";
                    } else {
                      elem.style.display = "none";
                    }
                  }}
                >
                  {episode.name}
                </span>
              </div>
              <div
                id={`d${idx}`}
                className="episode-desc"
                style={{ display: "none" }}
              >
                {episode.overview}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Seasons;
