import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.getResults();
        }}
      >
        <input
          className="search-bar search-bar-position"
          id="search"
          type="search"
          placeholder="Search for movies..."
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
