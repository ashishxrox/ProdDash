import React, { useState } from "react";
import SearchBox from "./SearchBox";
import '../../static/search.css'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0",
         // Background color for the search section
      }}
    >
      <div className="main-search-cont"
        style={{
          
          backgroundColor: "#fff", // White background for the search box
          
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      </div>
    </div>
  );
};

export default Search;
