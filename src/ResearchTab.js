import React, { useState } from "react";
import SwitchButton from "./SwitchButton";
import { SiDependabot } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import SearchInput from "./SearchInput";

const ResearchTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="typo">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        }}
      >
        <SiDependabot></SiDependabot>
        <h2>Research Tab</h2>
      </div>
      <div>
        <div style={{ paddingTop: "1vw" }}>
          {/* <input
            className="roundness"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter search term..."
          /> */}
          <div style={{padding:'20px'}}>
          <SearchInput></SearchInput>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "#00c04b",
          color: "white",
          boxSizing: "border-box",
          borderRadius: "1vh",
        }}
      >
        "Search the web
      </button>
      </div>
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            <p>{result.title}</p>
            {/* Display other relevant data from search results */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchTab;
