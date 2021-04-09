import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import data from "../../topmovies.json";
import { PrefixTree } from "../../PrefixTree/PrefixTree";

const SearchBar = (props) => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [pT, setPT] = useState(new PrefixTree());

  useEffect(() => {
    const temp = new PrefixTree();
    for (let item of data) {
      temp.addWord(item);
    }
    setPT(temp);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      const res = pT.listPossibilities(query, 10);

      setResults(res);
    }
  }, [query]);

  return (
    <>
      <div className="search-cont">
        <form
          onSubmit={(e) => {
            if (props.search.length) {
              e.preventDefault();
              props.getResults();
              setQuery("");
              props.setSearch("");
            }
          }}
        >
          <input
            className="search-bar search-bar-position"
            id="search"
            type="search"
            placeholder={`Search for ${
              props.isMovie ? "movies" : "tv shows"
            }...`}
            autoComplete="off"
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value);
              setQuery(e.target.value);
            }}
          />
          <input type="submit" style={{ display: "none" }} />
          <div className="suggestion-cont">
            {results.map((result, idx) => {
              return (
                <button
                  type="submit"
                  className="suggestion-record"
                  key={idx}
                  onClick={() => {
                    setQuery(result);
                    props.setSearch(result);
                  }}
                >
                  {result}
                </button>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
