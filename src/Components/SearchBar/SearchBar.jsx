import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.getResults();
          const searchBar = document.getElementById("search");
          props.length === 0 && searchBar.classList.add("up-pos");
        }}
      >
        <input
          className="search-bar search-bar-position"
          id="search"
          type="search"
          placeholder={`Search for ${props.isMovie ? "movies" : "tv shows"}...`}
          required
          autoComplete="off"
          onChange={(e) => props.setSearch(e.target.value)}
          onFocus={(e) => (e.target.value = "")}
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    </>
  );
};

export default SearchBar;
