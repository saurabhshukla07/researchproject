import React, { useState } from 'react';
import './SearchInput.css'; 
import SwitchButton from './SwitchButton';

const SearchInput = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here, e.g., fetch data based on searchText
    console.log('Searching for:', searchText);
  };

  return (
    <div className="search-container">
             <button className="search-button" onClick={handleSearch}>
        <img src="https://www.svgrepo.com/show/157848/search.svg" alt="Search" />
      </button>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange}
      />
 <SwitchButton></SwitchButton>
    </div>
  );
};

export default SearchInput;
