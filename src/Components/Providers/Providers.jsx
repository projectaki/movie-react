import React, { useEffect, useState } from "react";
import TvREST from "../../MovieApi/TvREST";

const Providers = ({ providers }) => {
  const [country, setCountry] = useState(
    JSON.parse(sessionStorage.getItem("country")) || ""
  );
  const [countryMap, setCountryMap] = useState(
    new Map(JSON.parse(sessionStorage.getItem("countryMap"))) || new Map()
  );

  const [flatRate, setFlatRate] = useState([]);
  //   const providers = {
  //     DK: {
  //       flatrate: [
  //         {
  //           provider_name: "netflix",
  //           logo_path: "/9A1JSVmSxsyaBK4SUFsYVqbAYfW.jpg",
  //         },
  //       ],
  //     },
  //   };
  useEffect(() => {
    console.log(providers);
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
    <div>
      <select
        style={{
          width: "50vmin",
          borderRadius: "5px",
          backgroundColor: "#484848",
          color: "white",
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
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
      <div style={{ display: "flex", marginTop: "2vmin" }}>
        {flatRate.map((x, idx) => {
          return (
            <img
              key={idx}
              style={{ width: "50px", marginRight: "1vw" }}
              src={`https://image.tmdb.org/t/p/w200${x.logo_path}`}
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Providers;
