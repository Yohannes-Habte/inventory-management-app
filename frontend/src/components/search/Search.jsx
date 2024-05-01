import React, { useState } from "react";
import "./Search.scss";
import ReactIcons from "../reactIcons/ReactIcons";

const Search = () => {
  const { searchIcon, closeIcon } = ReactIcons();
  const [filteredData, setFilteredData] = useState([]);
  const [inputText, setInputText] = useState("");

  // Handle filtering data
  const handleFilter = (event) => {
    // What you type in the input field to search what you want to find
    const searchedItem = event.target.value;
    setInputText(searchedItem);
    // Filtered result that you get once you type in the input field
    const searchItemResult = "data".filter((value) => {
      return value.title.toLowerCase().includes(searchedItem.toLowerCase());
    });

    if (searchedItem.length === "") {
      setFilteredData([]);
    } else {
      setFilteredData(searchItemResult);
    }
  };

  // Clear input
  const clearInput = () => {
    setFilteredData([]);
    setInputText("");
  };
  return (
    <form className="searchbar-form">
      <div className="input-container">
        <input
          type="text"
          autoCapitalize="off"
          value={inputText}
          onChange={handleFilter}
          placeholder="Type here..."
          className="searchbar-input"
        />
      </div>

      {inputText === "" ? (
        <span className="search-icon"> {searchIcon} </span>
      ) : (
        <span className="close-icon" onClick={clearInput}>
          {closeIcon}
        </span>
      )}
    </form>
  );
};

export default Search;
