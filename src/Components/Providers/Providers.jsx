import React, { useEffect, useState } from "react";
import TvREST from "../../MovieApi/TvREST";
import "./Provider.css";

const Providers = ({ providers }) => {
  const [country, setCountry] = useState(
    JSON.parse(sessionStorage.getItem("country")) || "Denmark"
  );
  const [countryMap, setCountryMap] = useState(
    new Map(JSON.parse(sessionStorage.getItem("countryMap"))) || new Map()
  );

  const [flatRate, setFlatRate] = useState([]);

  useEffect(() => {
    if (providers !== undefined) {
      if (providers.results[countryMap.get(country)] !== undefined) {
        const currentProv = providers.results[countryMap.get(country)];
        if (currentProv.flatrate !== undefined) {
          setFlatRate(currentProv.flatrate);
        }
      } else setFlatRate([]);
    }
  }, [country, countryMap, providers]);

  useEffect(() => {
    const getAndSetCountryList = async () => {
      const response = await TvREST.getCountryList();
      let arr = [...response.data];
      arr.sort(function (a, b) {
        if (a.english_name < b.english_name) {
          return -1;
        }
        if (a.english_name > b.english_name) {
          return 1;
        }

        return 0;
      });
      const tempMap = new Map();
      arr.forEach((x) => {
        tempMap.set(x.english_name, x.iso_3166_1);
      });
      setCountryMap(tempMap);
      sessionStorage.setItem("countryMap", JSON.stringify(Array.from(tempMap)));
    };
    if (countryMap.size === 0) getAndSetCountryList();
  }, [countryMap]);

  return (
    <>
      <div className="prov-disp">
        <select
          style={{
            width: "50vmin",
            borderRadius: "5px",
            backgroundColor: "#484848",
            color: "white",
            fontSize: "16px",
          }}
          name="Country"
          id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            sessionStorage.setItem("country", JSON.stringify(e.target.value));
          }}
        >
          {[...countryMap.keys()].map((country, index) => {
            return (
              <option key={index} value={country} style={{ fontSize: "16px" }}>
                {country}
              </option>
            );
          })}
        </select>
      </div>

      <div className="prov-disp-2">
        {flatRate.map((x, idx) => {
          return (
            <img
              key={idx}
              style={{ marginRight: "1vw" }}
              className="provider-img"
              src={`https://image.tmdb.org/t/p/w500${x.logo_path}`}
              alt={x.name}
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default Providers;
